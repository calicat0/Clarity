/*
Copyright (c) 2013 Suffick at Codepen (http://codepen.io/suffick) and GitHub (https://github.com/suffick)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var Clarity = function () {

    this.alert_errors   = false;
    this.log_info       = true;
    this.tile_size      = 16;
    this.limit_viewport = false;
    this.jump_switch    = 0;
    this.light_radius   = 8;
    this.ambient_brightness = 0.05;
    this.light_falloff  = 5;
    this.light_shape    = 'circle';
    this.light_trails   = true;
    this.trail_fade_speed = 0.01;
    this.trail_max_brightness = 1;
    this.camera_mode    = 'follow';
    this._trails        = {};
    
    this.viewport = {
        x: 200,
        y: 200
    };
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.key = {
        left: false,
        right: false,
        up: false
    };

    this.player = {

        loc: {
            x: 0,
            y: 0
        },
        
        vel: {
            x: 0,
            y: 0
        },
        
        can_jump: true
    };

    this.dt = 1;
    this.checkpoint = null;
    this.tasks = {};
    this.oneTimeTriggered = {};
    this.treasureReturnIndex = null;
    this._treasureCooldown = 0;
    this._treasurePromptActive = false;
    this._treasurePromptTileX = null;
    this._treasurePromptTileY = null;
    this.onTreasurePromptDismiss = null;
    this._fadingBlocks = {};
    this._automationTimers = [];

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup   = this.keyup.bind(this);
};

Clarity.prototype.error = function (message) {

    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};

Clarity.prototype.log = function (message) {

    if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {

    this.viewport.x = x;
    this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
    case 65:
        _this.key.left = true;
        e.preventDefault();
        break;
    case 38:
    case 87:
    case 32:
        _this.key.up = true;
        e.preventDefault();
        break;
    case 39:
    case 68:
        _this.key.right = true;
        e.preventDefault();
        break;
    }
};

Clarity.prototype.keyup = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
    case 65:
        _this.key.left = false;
        e.preventDefault();
        break;
    case 38:
    case 87:
    case 32:
        _this.key.up = false;
        e.preventDefault();
        break;
    case 39:
    case 68:
        _this.key.right = false;
        e.preventDefault();
        break;
    }
};

Clarity.prototype.load_map = function (map) {

    if (typeof map      === 'undefined'
     || typeof map.data === 'undefined'
     || typeof map.keys === 'undefined') {

        this.error('Error: Invalid map data!');

        return false;
    }

    this.current_map = map;

    this.current_map.background = map.background || '#333';
    this.current_map.gravity = map.gravity || {x: 0, y: 0.3};
    this.tile_size = map.tile_size || 16;

    var _this = this;
    
    this.current_map.width = 0;
    this.current_map.height = 0;

    map.keys.forEach(function (key) {

        map.data.forEach(function (row, y) {
            
            _this.current_map.height = Math.max(_this.current_map.height, y);

            row.forEach(function (tile, x) {
                
                _this.current_map.width = Math.max(_this.current_map.width, x);

                if (tile == key.id)
                    _this.current_map.data[y][x] = key;
            });
        });
    });
    
    this.current_map.width_p = this.current_map.width * this.tile_size;
    this.current_map.height_p = this.current_map.height * this.tile_size;

    this.player.loc.x = map.player.x * this.tile_size || 0;
    this.player.loc.y = map.player.y * this.tile_size || 0;
    this.player.colour = map.player.colour || '#000';
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.player.vel = {
        x: 0,
        y: 0
    };

    if (map.light_radius !== undefined) this.light_radius = map.light_radius;
    if (map.ambient_brightness !== undefined) this.ambient_brightness = map.ambient_brightness;
    if (map.light_falloff !== undefined) this.light_falloff = map.light_falloff;
    if (map.light_shape !== undefined) this.light_shape = map.light_shape;
    if (map.light_trails !== undefined) this.light_trails = map.light_trails;
    if (map.trail_fade_speed !== undefined) this.trail_fade_speed = map.trail_fade_speed;
    if (map.trail_max_brightness !== undefined) this.trail_max_brightness = map.trail_max_brightness;

    this.clearTasks();
    this.clearTrails();
    this.cancelTreasurePrompt();
    this._fadingBlocks = {};
    this._automationTimers.forEach(function(t) { clearTimeout(t); });
    this._automationTimers = [];

    this.startAutomationTimers();

    this.log('Successfully loaded map data.');

    return true;
};

Clarity.prototype.loadModularMap = function (index) {
    if (!this.modularData) {
        this.load_map(this.source_map);
        return;
    }
    if (index >= this.modularData.maps.length) {
        this.showMessage("You completed all levels!");
        return;
    }
    if (index < 0) index = 0;
    if (index !== this.modularIndex) this.oneTimeTriggered = {};
    this.modularIndex = index;
    var mapData = JSON.parse(JSON.stringify(this.modularData.maps[index]));
    if (!mapData.scripts) mapData.scripts = {};
    var isTreasure = this.modularData.maps[index] && this.modularData.maps[index].type === 'treasure';
    if (isTreasure && this.treasureReturnIndex !== null) {
        var retIdx = this.treasureReturnIndex;
        mapData.scripts.next_level = 'this.checkpoint=null;if(typeof this.onLevelCompleted==="function")this.onLevelCompleted(this.modularIndex);this.treasureReturnIndex=null;this.loadModularMap(' + retIdx + ');';
    } else {
        mapData.scripts.next_level = 'this.checkpoint=null;if(typeof this.onLevelCompleted==="function")this.onLevelCompleted(this.modularIndex);if(this.modularData){var nx=this.findNextMainlineLevel(this.modularIndex+1);if(nx>=0){this.loadModularMap(nx);}else{this.showMessage("All levels complete!");}}else{this.showMessage("You win!");this.load_map(this.source_map);}';
    }
    mapData.scripts.death = '';
    this.source_map = mapData;
    this.load_map(mapData);
    if (this._savedLevelState && this.modularData.maps[index] && this.modularData.maps[index].type !== 'treasure') {
        this.setLevelState(this._savedLevelState);
        this._savedLevelState = null;
    }
    this.limit_viewport = true;
};

Clarity.prototype.get_tile = function (x, y) {

    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};

Clarity.prototype.tileBlocksLOS = function (tile) {
    return tile && !tile.lightPasses && (tile.opaque || tile.solid || tile.script === 'death');
};

Clarity.prototype.hasLineOfSight = function (x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = x0 < x1 ? 1 : -1;
    var sy = y0 < y1 ? 1 : -1;
    var err = dx - dy;
    var x = x0, y = y0;
    var destTile = this.get_tile(x1, y1);
    var destIsDeath = destTile && destTile.script === 'death';
    var passedDeath = false;
    var brokeChain = false;

    while (true) {
        if ((x !== x0 || y !== y0) && (x !== x1 || y !== y1)) {
            var tile = this.get_tile(x, y);

            if (passedDeath && tile && tile.script !== 'death') {
                brokeChain = true;
            }

            if (this.tileBlocksLOS(tile)) {
                if (tile.script === 'death' && !brokeChain && (destIsDeath || (destTile && destTile.solid))) {
                    passedDeath = true;
                } else {
                    return false;
                }
            }
        }
        if (x === x1 && y === y1) {
            if (brokeChain) return false;
            return true;
        }

        var e2 = 2 * err;
        var prevX = x, prevY = y;
        if (e2 > -dy) { err -= dy; x += sx; }
        if (e2 < dx) { err += dx; y += sy; }

        if ((x - prevX) !== 0 && (y - prevY) !== 0) {
            var tileH = this.get_tile(prevX + sx, prevY);
            var tileV = this.get_tile(prevX, prevY + sy);
            if (this.tileBlocksLOS(tileH) && this.tileBlocksLOS(tileV)) {
                if (!(tileH.script === 'death' && tileV.script === 'death' && !brokeChain && (destIsDeath || (destTile && destTile.solid)))) return false;
            }
            if (passedDeath && ((tileH && tileH.script && tileH.script !== 'death') || (tileV && tileV.script && tileV.script !== 'death'))) {
                brokeChain = true;
            }
        }
    }
};

Clarity.prototype.getLightDist = function (dx, dy) {
    switch (this.light_shape) {
        case 'square': return Math.max(Math.abs(dx), Math.abs(dy));
        case 'diamond': return Math.abs(dx) + Math.abs(dy);
        default: return Math.sqrt(dx * dx + dy * dy);
    }
};

Clarity.prototype.draw_tile = function (x, y, tile, context, brightness) {

    if (!tile || !tile.colour) return;

    context.fillStyle = tile.colour;
    context.fillRect(
        Math.round(x),
        Math.round(y),
        this.tile_size,
        this.tile_size
    );

    if (brightness !== undefined && brightness < 1) {
        context.fillStyle = 'rgba(0,0,0,' + (1 - brightness).toFixed(3) + ')';
        context.fillRect(
            Math.round(x),
            Math.round(y),
            this.tile_size,
            this.tile_size
        );
    }
};

Clarity.prototype.draw_map = function (context, fore) {

    var px = Math.round(this.player.loc.x / this.tile_size);
    var py = Math.round(this.player.loc.y / this.tile_size);
    var radius = this.light_radius;

    for (var y = 0; y < this.current_map.data.length; y++) {

        for (var x = 0; x < this.current_map.data[y].length; x++) {

            if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {

                var t_x = (x * this.tile_size) - this.camera.x;
                var t_y = (y * this.tile_size) - this.camera.y;
                
                if(t_x < -this.tile_size
                || t_y < -this.tile_size
                || t_x > this.viewport.x
                || t_y > this.viewport.y) continue;

                var brightness = this.ambient_brightness;
                var dx = x - px;
                var dy = y - py;
                var dist = this.getLightDist(dx, dy);

                if (dist <= radius) {
                    brightness = 1 - (1 - this.ambient_brightness) * Math.pow(dist / radius, this.light_falloff);
                    if (brightness > this.ambient_brightness && !this.hasLineOfSight(px, py, x, y)) {
                        brightness = this.ambient_brightness;
                    }
                }

                if (this.light_trails && brightness > this.ambient_brightness) {
                    var tKey = x + ',' + y;
                    var trail = this._trails[tKey] || 0;
                    if (brightness > trail) {
                        this._trails[tKey] = Math.min(brightness, this.trail_max_brightness);
                    }
                }

                if (this.light_trails) {
                    var tKey = x + ',' + y;
                    var trailVal = this._trails[tKey] || 0;
                    if (trailVal > brightness) brightness = trailVal;
                }
                
                this.draw_tile(
                    t_x,
                    t_y,
                    this.current_map.data[y][x],
                    context,
                    brightness
                );
            }
        }
    }

    if (!fore) this.draw_map(context, true);
};

Clarity.prototype.move_player = function () {

    var tX = this.player.loc.x + this.player.vel.x;
    var tY = this.player.loc.y + this.player.vel.y;

    var offset = Math.round((this.tile_size / 2) - 1);

    var tile = this.get_tile(
        Math.round(this.player.loc.x / this.tile_size),
        Math.round(this.player.loc.y / this.tile_size)
    );
     
    if(tile.gravity) {
        
        this.player.vel.x += tile.gravity.x * this.dt;
        this.player.vel.y += tile.gravity.y * this.dt;
        
    } else {
        
        this.player.vel.x += this.current_map.gravity.x * this.dt;
        this.player.vel.y += this.current_map.gravity.y * this.dt;
    }
    
    if (tile.friction) {

        this.player.vel.x *= Math.pow(tile.friction.x, this.dt);
        this.player.vel.y *= Math.pow(tile.friction.y, this.dt);
    }

    var t_y_up   = Math.floor(tY / this.tile_size);
    var t_y_down = Math.ceil(tY / this.tile_size);
    var y_near1  = Math.round((this.player.loc.y - offset) / this.tile_size);
    var y_near2  = Math.round((this.player.loc.y + offset) / this.tile_size);

    var t_x_left  = Math.floor(tX / this.tile_size);
    var t_x_right = Math.ceil(tX / this.tile_size);
    var x_near1   = Math.round((this.player.loc.x - offset) / this.tile_size);
    var x_near2   = Math.round((this.player.loc.x + offset) / this.tile_size);

    var top1    = this.get_tile(x_near1, t_y_up);
    var top2    = this.get_tile(x_near2, t_y_up);
    var bottom1 = this.get_tile(x_near1, t_y_down);
    var bottom2 = this.get_tile(x_near2, t_y_down);
    var left1   = this.get_tile(t_x_left, y_near1);
    var left2   = this.get_tile(t_x_left, y_near2);
    var right1  = this.get_tile(t_x_right, y_near1);
    var right2  = this.get_tile(t_x_right, y_near2);


    if (tile.jump && this.jump_switch > 15) {

        this.player.can_jump = true;
        
        this.jump_switch = 0;
        
    } else this.jump_switch += this.dt;
    
    this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
    this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);
    
    this.player.loc.x += this.player.vel.x * this.dt;
    this.player.loc.y += this.player.vel.y * this.dt;
    
    this.player.vel.x *= Math.pow(.9, this.dt);
    
    if (left1.solid || left2.solid || right1.solid || right2.solid) {

        /* fix overlap */

        while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x += 0.1;

        while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x -= 0.1;

        /* tile bounce */

        var bounce = 0;

        if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
        if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
        if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
        if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;

        this.player.vel.x *= -bounce || 0;
        
    }
    
    if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {

        /* fix overlap */
        
        while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y += 0.1;

        while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y -= 0.1;

        /* tile bounce */
        
        var bounce = 0;
        
        if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
        if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
        if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
        if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;
        
        this.player.vel.y *= -bounce || 0;

        if ((bottom1.solid || bottom2.solid) && !tile.jump) {
            
            this.player.on_floor = true;
            this.player.can_jump = true;
            
            if (bottom1 && bottom1.fade) {
                this.activateFade(x_near1, t_y_down, bottom1);
            }
            if (bottom2 && bottom2.fade) {
                this.activateFade(x_near2, t_y_down, bottom2);
            }
        }
        
    }
    
    // adjust camera

    if (this.camera_mode === 'locked') {

        this.camera.x = this.player.loc.x + this.tile_size / 2 - this.viewport.x / 2;
        this.camera.y = this.player.loc.y + this.tile_size / 2 - this.viewport.y / 2;

        if (this.limit_viewport) {
            this.camera.x = Math.min(
                this.current_map.width_p - this.viewport.x + this.tile_size,
                Math.max(0, this.camera.x)
            );
            this.camera.y = Math.min(
                this.current_map.height_p - this.viewport.y + this.tile_size,
                Math.max(0, this.camera.y)
            );
        }

    } else {

        var c_x = Math.round(this.player.loc.x - this.viewport.x/2);
        var c_y = Math.round(this.player.loc.y - this.viewport.y/2);
        var x_dif = Math.abs(c_x - this.camera.x);
        var y_dif = Math.abs(c_y - this.camera.y);
        
        if(x_dif > 5) {
            
            var mag = Math.round(Math.max(1, x_dif * 0.1));
        
            if(c_x != this.camera.x) {
                
                this.camera.x += c_x > this.camera.x ? mag : -mag;
                
                if(this.limit_viewport) {
                    
                    this.camera.x = 
                        Math.min(
                            this.current_map.width_p - this.viewport.x + this.tile_size,
                            this.camera.x
                        );
                    
                    this.camera.x = 
                        Math.max(
                            0,
                            this.camera.x
                        );
                }
            }
        }
        
        if(y_dif > 5) {
            
            var mag = Math.round(Math.max(1, y_dif * 0.1));
            
            if(c_y != this.camera.y) {
                
                this.camera.y += c_y > this.camera.y ? mag : -mag;
            
                if(this.limit_viewport) {
                    
                    this.camera.y = 
                        Math.min(
                            this.current_map.height_p - this.viewport.y + this.tile_size,
                            this.camera.y
                        );
                    
                    this.camera.y = 
                        Math.max(
                            0,
                            this.camera.y
                        );
                }
            }
        }

    }
    
    if(this.last_tile != tile.id) {
        var autoHandled = this.checkAutomations({ type: 'tile_step', tileId: tile.id });
        if (!autoHandled && tile.script) {
            if (tile.script === "death") {
                this.handleDeath();
            } else {
                eval(this.current_map.scripts[tile.script]);
            }
        }
    }
    
    this.last_tile = tile.id;
};

Clarity.prototype.update_player = function () {

    if (this.key.left) {

        if (this.player.vel.x > -this.current_map.vel_limit.x)
            this.player.vel.x -= this.current_map.movement_speed.left * this.dt;
    }

    if (this.key.up) {

        if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {
            
            this.player.vel.y -= this.current_map.movement_speed.jump;
            this.player.can_jump = false;
        }
    }

    if (this.key.right) {

        if (this.player.vel.x < this.current_map.vel_limit.x)
            this.player.vel.x += this.current_map.movement_speed.left * this.dt;
    }

    this.move_player();
};

Clarity.prototype.draw_player = function (context) {

    context.fillStyle = this.player.colour;

    context.beginPath();

    context.arc(
        this.player.loc.x + this.tile_size / 2 - this.camera.x,
        this.player.loc.y + this.tile_size / 2 - this.camera.y,
        this.tile_size / 2 - 1,
        0,
        Math.PI * 2
    );

    context.fill();
};

Clarity.prototype.clearTrails = function () {
    this._trails = {};
};

Clarity.prototype.startAutomationTimers = function () {
    if (!this.current_map || !this.current_map.automations) return;
    var map = this.current_map;
    var self = this;
    map.automations.forEach(function (auto) {
        if (auto.enabled === false) return;
        if (auto.trigger && auto.trigger.type === 'timer') {
            var delay = (auto.trigger.params && auto.trigger.params.delay) || 0;
            var timer = setTimeout(function () {
                if (auto.once) {
                    if (!self.oneTimeTriggered) self.oneTimeTriggered = {};
                    var key = 'auto_timer_' + auto.id;
                    if (self.oneTimeTriggered[key]) return;
                    self.oneTimeTriggered[key] = true;
                }
                self.executeAutomationActions(auto.actions);
            }, delay * 1000);
            self._automationTimers.push(timer);
        }
    });
};

Clarity.prototype.checkAutomations = function (context) {
    if (!this.current_map || !this.current_map.automations) return false;
    var handled = false;
    var map = this.current_map;
    var self = this;
    map.automations.forEach(function (auto) {
        if (auto.enabled === false) return;
        if (!auto.trigger || auto.trigger.type !== context.type) return;
        var match = false;
        switch (context.type) {
            case 'tile_step':
                if (auto.trigger.params.tileId === context.tileId) {
                    match = true;
                    if (auto.once) {
                        if (!self.oneTimeTriggered) self.oneTimeTriggered = {};
                        var key = 'auto_step_' + auto.id + '_' + context.tileId;
                        if (self.oneTimeTriggered[key]) { match = false; break; }
                        self.oneTimeTriggered[key] = true;
                    }
                }
                break;
            case 'key_collected':
                if (auto.trigger.params.keyId === context.keyId) {
                    match = true;
                    if (auto.once) {
                        if (!self.oneTimeTriggered) self.oneTimeTriggered = {};
                        var key = 'auto_key_' + auto.id + '_' + context.keyId;
                        if (self.oneTimeTriggered[key]) { match = false; break; }
                        self.oneTimeTriggered[key] = true;
                    }
                }
                break;
            case 'checkpoint':
                if (auto.trigger.params.checkpointId === context.checkpointId) {
                    match = true;
                    if (auto.once) {
                        if (!self.oneTimeTriggered) self.oneTimeTriggered = {};
                        var key = 'auto_cp_' + auto.id + '_' + context.checkpointId;
                        if (self.oneTimeTriggered[key]) { match = false; break; }
                        self.oneTimeTriggered[key] = true;
                    }
                }
                break;
            case 'task_completed':
                if (auto.trigger.params.taskId === context.taskId) {
                    match = true;
                    if (auto.once) {
                        if (!self.oneTimeTriggered) self.oneTimeTriggered = {};
                        var key = 'auto_task_' + auto.id + '_' + context.taskId;
                        if (self.oneTimeTriggered[key]) { match = false; break; }
                        self.oneTimeTriggered[key] = true;
                    }
                }
                break;
        }
        if (match) {
            self.executeAutomationActions(auto.actions);
            handled = true;
        }
    });
    return handled;
};

Clarity.prototype.executeAutomationActions = function (actions) {
    if (!actions || !this.current_map) return;
    var map = this.current_map;
    var self = this;

    function executeOne(index) {
        if (index >= actions.length) return;
        var action = actions[index];
        var p = action.params || {};
        var delay = action.type === 'wait' ? ((p.duration || 1) * 1000) : 0;

        function doAction() {
            switch (action.type) {
                case 'set_solid': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (k) k.solid = p.value ? 1 : 0;
                    break;
                }
                case 'set_colour': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (!k) break;
                    if (p.source === 'theme' && map.themePalette && map.themePalette[p.themeIndex] !== undefined) {
                        k.colour = map.themePalette[p.themeIndex];
                    } else if (p.colour) {
                        k.colour = p.colour;
                    }
                    break;
                }
                case 'set_opaque': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (k) k.opaque = p.value ? 1 : 0;
                    break;
                }
                case 'set_bounce': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (k) k.bounce = p.value || 0;
                    break;
                }
                case 'set_jump': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (k) k.jump = p.value ? 1 : 0;
                    break;
                }
                case 'set_fore': {
                    var k = map.keys.find(function (k) { return k.id === p.targetId; });
                    if (k) k.fore = p.value ? 1 : 0;
                    break;
                }
                case 'show_message': {
                    self.showMessage(p.message || '');
                    break;
                }
                case 'complete_task': {
                    self.completeTask(p.taskId);
                    break;
                }
                case 'activate_checkpoint': {
                    self.activateCheckpoint(p.checkpointId);
                    break;
                }
                case 'go_to_treasure': {
                    self.goToTreasure(p.treasureId);
                    break;
                }
                case 'set_player_colour': {
                    if (p.colour) self.player.colour = p.colour;
                    break;
                }
                case 'change_block': {
                    if (p.targetId !== undefined && p.targetId !== null && p.toId !== undefined) {
                        var srcKey = map.keys.find(function(k) { return k.id === p.targetId; });
                        var dstKey = map.keys.find(function(k) { return k.id === p.toId; });
                        if (srcKey && dstKey) {
                            for (var y = 0; y < map.data.length; y++) {
                                for (var x = 0; x < map.data[y].length; x++) {
                                    if (map.data[y][x] === srcKey) {
                                        map.data[y][x] = dstKey;
                                    }
                                }
                            }
                        }
                    }
                    break;
                }
                case 'wait': {
                    // Just pause; executeOne will be called after the delay via setTimeout
                    break;
                }
                case 'change_new_block': {
                    var srcKey = map.keys.find(function(k) { return k.id === p.targetId; });
                    if (!srcKey) break;
                    if (p.newColSource === 'theme' && map.themePalette && map.themePalette[p.newColThemeIdx] !== undefined) {
                        srcKey.colour = map.themePalette[p.newColThemeIdx];
                    } else if (p.newColour) {
                        srcKey.colour = p.newColour;
                    }
                    srcKey.solid = p.newSolid ? 1 : 0;
                    srcKey.opaque = p.newOpaque ? 1 : 0;
                    srcKey.bounce = p.newBounce || 0;
                    srcKey.jump = p.newJump ? 1 : 0;
                    srcKey.fore = p.newFore ? 1 : 0;
                    if (p.newName) srcKey.name = p.newName;
                    if (p.newLightPasses !== undefined) srcKey.lightPasses = p.newLightPasses ? true : undefined;
                    if (p.newIsDeath) {
                        srcKey.script = 'death';
                        srcKey.solid = 0;
                    } else if (srcKey.script === 'death') {
                        delete srcKey.script;
                    }
                    if (p.newFrictionX || p.newFrictionY) {
                        srcKey.friction = { x: p.newFrictionX || 0, y: p.newFrictionY || 0 };
                    } else {
                        delete srcKey.friction;
                    }
                    if (p.newGravityX || p.newGravityY) {
                        srcKey.gravity = { x: p.newGravityX || 0, y: p.newGravityY || 0 };
                    } else {
                        delete srcKey.gravity;
                    }
                    srcKey.isKey = p.newIsKey ? true : undefined;
                    srcKey.unlocks = (p.newIsKey && p.newUnlocks) ? p.newUnlocks : undefined;
                    srcKey.isDoor = p.newIsDoor ? true : undefined;
                    srcKey.lockKey = (p.newIsDoor && p.newLockKey) ? p.newLockKey : undefined;
                    if (p.newFade) {
                        srcKey.fade = 1;
                        srcKey.fadeDelay = p.newFadeDelay || 0.5;
                        srcKey.fadeDuration = p.newFadeDuration || 0.4;
                        srcKey.fadeRespawn = p.newFadeRespawn || 3;
                        srcKey.groupFade = p.newGroupFade ? 1 : undefined;
                    } else {
                        delete srcKey.fade;
                        delete srcKey.fadeDelay;
                        delete srcKey.fadeDuration;
                        delete srcKey.fadeRespawn;
                        delete srcKey.groupFade;
                    }
                    if (p.newIsTreasureExit && p.newTreasureTargetId) {
                        srcKey.isTreasureExit = true;
                        srcKey.treasureTargetId = p.newTreasureTargetId;
                    } else {
                        delete srcKey.isTreasureExit;
                        delete srcKey.treasureTargetId;
                    }
                    if (p.newIsCheckpoint) {
                        srcKey.isCheckpoint = true;
                        srcKey.solid = 0;
                        srcKey.saveDoorStates = p.newSaveDoorStates !== false;
                        srcKey.respawnMessage = p.newRespawnMsg || undefined;
                        srcKey.oneTimeOnly = p.newOneTimeOnly !== false;
                        srcKey.extraCommand = p.newExtraCommand ? true : undefined;
                        srcKey.extraTargetId = p.newExtraTargetId || undefined;
                        srcKey.extraTargetColour = p.newExtraTargetColour || undefined;
                    } else {
                        delete srcKey.isCheckpoint;
                        delete srcKey.saveDoorStates;
                        delete srcKey.respawnMessage;
                        delete srcKey.oneTimeOnly;
                        delete srcKey.extraCommand;
                        delete srcKey.extraTargetId;
                        delete srcKey.extraTargetColour;
                    }
                    if (p.newIsTask) {
                        srcKey.isTask = true;
                        srcKey.taskId = p.newTaskId || srcKey.id;
                        srcKey.taskType = p.newTaskType || 'persistent';
                        srcKey.taskMessage = p.newTaskMsg || ('Task ' + srcKey.taskId);
                        srcKey.taskOneTime = p.newTaskOnce !== false;
                        if (p.newTaskType === 'timeout') srcKey.taskDuration = p.newTaskDuration || 5;
                    } else {
                        delete srcKey.isTask;
                        delete srcKey.taskId;
                        delete srcKey.taskType;
                        delete srcKey.taskMessage;
                        delete srcKey.taskDuration;
                        delete srcKey.taskOneTime;
                    }
                    if (p.newCompletesTaskId) {
                        srcKey.completesTaskId = p.newCompletesTaskId;
                    } else {
                        delete srcKey.completesTaskId;
                    }
                    if (srcKey.script === 'death') {
                        var px = Math.round(self.player.loc.x / self.tile_size);
                        var py = Math.round(self.player.loc.y / self.tile_size);
                        var playerTile = map.data[py] && map.data[py][px];
                        if (playerTile === srcKey) {
                            self.handleDeath();
                        }
                    }
                    break;
                }
            }
            executeOne(index + 1);
        }

        if (delay > 0) {
            setTimeout(doAction, delay);
        } else {
            doAction();
        }
    }

    executeOne(0);
};

Clarity.prototype.update = function () {

    if (!this.current_map) return;
    this.update_player();

    if (this.light_trails) {
        for (var key in this._trails) {
            this._trails[key] -= this.trail_fade_speed;
            if (this._trails[key] <= 0) delete this._trails[key];
        }
    }

    if (this._treasurePromptActive && this._treasurePromptTileX !== null && this.tile_size) {
        var px = Math.round(this.player.loc.x / this.tile_size);
        var py = Math.round(this.player.loc.y / this.tile_size);
        if (Math.abs(px - this._treasurePromptTileX) > 5 || Math.abs(py - this._treasurePromptTileY) > 5) {
            this._treasurePromptActive = false;
            this._treasurePromptTileX = null;
            this._treasurePromptTileY = null;
            if (typeof this.onTreasurePromptDismiss === 'function') {
                this.onTreasurePromptDismiss();
                this.onTreasurePromptDismiss = null;
            }
        }
    }

    for (var fbKey in this._fadingBlocks) {
        var fb = this._fadingBlocks[fbKey];
        fb.timer += this.dt / 60;

        var parts = fbKey.split(',');
        var tx = parseInt(parts[0]);
        var ty = parseInt(parts[1]);
        var tile = this.current_map.data[ty] ? this.current_map.data[ty][tx] : null;
        if (!tile) continue;

        if (fb.state === 'active') {
            if (fb.timer >= fb.delay) {
                var isShared = this.current_map.keys.some(function (k) { return k === tile; });
                if (isShared) {
                    var clone = {};
                    for (var prop in tile) clone[prop] = tile[prop];
                    this.current_map.data[ty][tx] = clone;
                    tile = clone;
                }
                tile.solid = 0;
                if (tile.bounce !== undefined) {
                    tile._origBounce = tile.bounce;
                    tile.bounce = 0;
                }
                var id1 = this.current_map.keys.find(function (k) { return k.id === 1; });
                fb._startColour = tile.colour;
                fb._targetColour = id1 ? id1.colour : '#888';
                fb.state = 'fading';
            }
        } else if (fb.state === 'fading') {
            var fadeElapsed = fb.timer - fb.delay;
            var t = Math.min(1, fadeElapsed / fb.fadeDuration);
            tile.colour = this.lerpColour(fb._startColour, fb._targetColour, t);
            if (t >= 1) {
                fb.timer = 0;
                fb.state = 'gone';
            }
        } else if (fb.state === 'gone') {
            if (fb.timer >= fb.respawn) {
                if (this.playerOverlapsTile(tx, ty)) continue;
                tile.solid = 1;
                if (tile._origBounce !== undefined) {
                    tile.bounce = tile._origBounce;
                }
                var id2 = this.current_map.keys.find(function (k) { return k.id === 2; });
                if (id2) tile.colour = id2.colour;
                delete this._fadingBlocks[fbKey];
            }
        }
    }
};

Clarity.prototype.findConnectedTiles = function (tx, ty, tileId) {
    var visited = {};
    var result = [];
    var queue = [{x: tx, y: ty}];
    while (queue.length) {
        var p = queue.shift();
        var key = p.x + ',' + p.y;
        if (visited[key]) continue;
        visited[key] = true;
        var tile = this.current_map.data[p.y] ? this.current_map.data[p.y][p.x] : null;
        if (!tile || tile.id !== tileId) continue;
        result.push({x: p.x, y: p.y});
        queue.push({x: p.x - 1, y: p.y});
        queue.push({x: p.x + 1, y: p.y});
        queue.push({x: p.x, y: p.y - 1});
        queue.push({x: p.x, y: p.y + 1});
    }
    return result;
};

Clarity.prototype.activateFade = function (tx, ty, tile) {
    if (tile.groupFade) {
        var _this = this;
        var group = this.findConnectedTiles(tx, ty, tile.id);
        group.forEach(function (p) {
            var gKey = p.x + ',' + p.y;
            if (!_this._fadingBlocks[gKey]) {
                _this._fadingBlocks[gKey] = { timer: 0, state: 'active', delay: tile.fadeDelay || 0.5, respawn: tile.fadeRespawn || 3, fadeDuration: tile.fadeDuration || 0.4 };
            }
        });
    } else {
        var fbKey = tx + ',' + ty;
        if (!this._fadingBlocks[fbKey]) {
            this._fadingBlocks[fbKey] = { timer: 0, state: 'active', delay: tile.fadeDelay || 0.5, respawn: tile.fadeRespawn || 3, fadeDuration: tile.fadeDuration || 0.4 };
        }
    }
};

Clarity.prototype.playerOverlapsTile = function (tx, ty) {
    var cx = this.player.loc.x + this.tile_size / 2;
    var cy = this.player.loc.y + this.tile_size / 2;
    var r = this.tile_size / 2 - 1;
    var tileLeft = tx * this.tile_size;
    var tileRight = (tx + 1) * this.tile_size;
    var tileTop = ty * this.tile_size;
    var tileBottom = (ty + 1) * this.tile_size;
    var closestX = Math.max(tileLeft, Math.min(cx, tileRight));
    var closestY = Math.max(tileTop, Math.min(cy, tileBottom));
    var dx = cx - closestX;
    var dy = cy - closestY;
    return dx * dx + dy * dy < r * r;
};

Clarity.prototype.lerpColour = function (a, b, t) {
    if (!a || !b || a.charAt(0) !== '#' || b.charAt(0) !== '#') return t < 0.5 ? a : b;
    if (a.length === 4) a = '#' + a[1] + a[1] + a[2] + a[2] + a[3] + a[3];
    if (b.length === 4) b = '#' + b[1] + b[1] + b[2] + b[2] + b[3] + b[3];
    var ar = parseInt(a.slice(1, 3), 16), ag = parseInt(a.slice(3, 5), 16), ab = parseInt(a.slice(5, 7), 16);
    var br = parseInt(b.slice(1, 3), 16), bg = parseInt(b.slice(3, 5), 16), bb = parseInt(b.slice(5, 7), 16);
    if (isNaN(ar)) return a;
    var r = Math.round(ar + (br - ar) * t);
    var g = Math.round(ag + (bg - ag) * t);
    var bv = Math.round(ab + (bb - ab) * t);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + bv).toString(16).slice(1);
};

Clarity.prototype.showMessage = function (text, duration) {
    var div = document.getElementById('game-message');
    if (!div) {
        div = document.createElement('div');
        div.id = 'game-message';
        div.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:#fff;padding:12px 24px;border-radius:4px;font:16px monospace;z-index:9999;pointer-events:none;transition:opacity 0.5s;';
        document.body.appendChild(div);
    }
    div.textContent = text;
    div.style.opacity = '1';
    clearTimeout(div._timeout);
    var ms = (duration || 1.5) * 1000;
    div._timeout = setTimeout(function () {
        div.style.opacity = '0';
    }, ms);
};

Clarity.prototype.clearTasks = function () {
    var list = document.getElementById('task-list');
    if (list) list.innerHTML = '';
    this.tasks = {};
};

Clarity.prototype.addTask = function (taskId, message, type, duration, oneTimeOnly) {
    if (this.tasks[taskId]) return;
    if (oneTimeOnly) {
        if (!this.oneTimeTriggered) this.oneTimeTriggered = {};
        if (this.oneTimeTriggered['task_' + taskId]) return;
        this.oneTimeTriggered['task_' + taskId] = true;
    }
    if (type === 'timeout') {
        this.showMessage(message, duration || 5);
        return;
    }
    var list = document.getElementById('task-list');
    if (!list) {
        list = document.createElement('div');
        list.id = 'task-list';
        list.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:9998;pointer-events:none;align-items:center;';
        document.body.appendChild(list);
    }
    var el = document.createElement('div');
    el.style.cssText = 'background:rgba(0,0,0,0.8);color:#fff;padding:12px 24px;border-radius:4px;font:16px monospace;transition:opacity 0.5s;text-align:center;';
    el.textContent = message;
    list.appendChild(el);
    this.tasks[taskId] = { id: taskId, message: message, element: el };
};

Clarity.prototype.completeTask = function (taskId) {
    var task = this.tasks[taskId];
    if (!task) return;
    task.element.style.opacity = '0';
    var self = this;
    setTimeout(function () {
        if (task.element.parentNode) task.element.parentNode.removeChild(task.element);
        delete self.tasks[taskId];
    }, 300);
    this.checkAutomations({ type: 'task_completed', taskId: taskId });
};

Clarity.prototype.getLevelState = function () {
    return {
        playerX: this.player.loc.x,
        playerY: this.player.loc.y,
        playerColour: this.player.colour,
        doorStates: this.getDoorStates(),
        checkpoint: this.checkpoint ? JSON.parse(JSON.stringify(this.checkpoint)) : null,
        oneTimeTriggered: this.oneTimeTriggered ? JSON.parse(JSON.stringify(this.oneTimeTriggered)) : {},
        tasks: Object.keys(this.tasks).map(function (id) {
            var t = this.tasks[id];
            return { id: t.id, message: t.message };
        }, this)
    };
};

Clarity.prototype.setLevelState = function (state) {
    if (!state) return;
    this.player.loc.x = state.playerX;
    this.player.loc.y = state.playerY;
    this.player.colour = state.playerColour;
    if (state.doorStates) {
        state.doorStates.forEach(function (ds) {
            var door = this.current_map.keys.find(function (k) { return k.id === ds.id; });
            if (door) {
                door.solid = ds.solid;
                door.colour = ds.colour;
            }
        }, this);
    }
    this.checkpoint = state.checkpoint ? JSON.parse(JSON.stringify(state.checkpoint)) : null;
    this.oneTimeTriggered = state.oneTimeTriggered ? JSON.parse(JSON.stringify(state.oneTimeTriggered)) : {};
    // Restore persistent tasks
    if (state.tasks) {
        state.tasks.forEach(function (t) {
            if (this.tasks[t.id]) return;
            var list = document.getElementById('task-list');
            if (!list) {
                list = document.createElement('div');
                list.id = 'task-list';
                list.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:9998;pointer-events:none;align-items:center;';
                document.body.appendChild(list);
            }
            var el = document.createElement('div');
            el.style.cssText = 'background:rgba(0,0,0,0.8);color:#fff;padding:12px 24px;border-radius:4px;font:16px monospace;transition:opacity 0.5s;text-align:center;';
            el.textContent = t.message;
            list.appendChild(el);
            this.tasks[t.id] = { id: t.id, message: t.message, element: el };
        }, this);
    }
    // Prevent re-triggering the tile the player is standing on
    var ft = this.get_tile(Math.round(this.player.loc.x / this.tile_size), Math.round(this.player.loc.y / this.tile_size));
    if (ft && ft.id !== undefined) this.last_tile = ft.id;
};

Clarity.prototype.getDoorStates = function () {
    var states = [];
    this.current_map.keys.forEach(function (k) {
        if (k.isDoor) {
            states.push({ id: k.id, solid: k.solid, colour: k.colour });
        }
    });
    return states;
};

Clarity.prototype.activateCheckpoint = function (tileId) {
    var cpTile = this.current_map.keys.find(function (k) { return k.id === tileId; });
    if (!cpTile) return;

    var tileX = Math.round(this.player.loc.x / this.tile_size);
    var tileY = Math.round(this.player.loc.y / this.tile_size);

    var isSameCheckpoint = this.checkpoint &&
        Math.round(this.checkpoint.playerX / this.tile_size) === tileX &&
        Math.round(this.checkpoint.playerY / this.tile_size) === tileY;

    this.checkpoint = {
        playerX: this.player.loc.x,
        playerY: this.player.loc.y,
        playerColour: this.player.colour,
        doorStates: cpTile.saveDoorStates !== false ? this.getDoorStates() : []
    };

    if (cpTile.respawnMessage && !isSameCheckpoint) {
        this.showMessage(cpTile.respawnMessage);
    }

    if (cpTile.oneTimeOnly) {
        if (!this.oneTimeTriggered) this.oneTimeTriggered = {};
        var triggerKey = 'cp_' + tileId + '_' + tileX + '_' + tileY;
        if (!this.oneTimeTriggered[triggerKey]) {
            this.oneTimeTriggered[triggerKey] = true;
            if (cpTile.extraCommand && cpTile.extraTargetId) {
                var targetTile = this.current_map.keys.find(function (k) { return k.id === cpTile.extraTargetId; });
                if (targetTile) {
                    targetTile.colour = cpTile.extraTargetColour || targetTile.colour;
                }
            }
        }
    }

    this.checkAutomations({ type: 'checkpoint', checkpointId: tileId });
};

Clarity.prototype.findNextMainlineLevel = function (fromIndex) {
    if (!this.modularData) return -1;
    for (var i = fromIndex; i < this.modularData.maps.length; i++) {
        if (this.modularData.maps[i].type !== 'treasure') return i;
    }
    return -1;
};

Clarity.prototype.goToTreasure = function (treasureId) {
    if (!this.modularData) return false;
    if (this._treasurePromptActive) return false;
    if (this._treasureCooldown && this._treasureCooldown > Date.now()) return false;

    // If treasure has been discovered before, prompt instead of auto-entering
    if (typeof this.onCheckTreasureDiscovered === 'function' && this.onCheckTreasureDiscovered(treasureId)) {
        if (typeof this.onPromptTreasureReentry === 'function') {
            var self = this;
            this._treasurePromptActive = true;
            this._treasurePromptTileX = Math.round(this.player.loc.x / this.tile_size);
            this._treasurePromptTileY = Math.round(this.player.loc.y / this.tile_size);
            this.onPromptTreasureReentry(treasureId, function () {
                self._treasurePromptActive = false;
                self._treasurePromptTileX = null;
                self._treasurePromptTileY = null;
                self._doGoToTreasure(treasureId);
            });
            return true;
        }
    }

    return this._doGoToTreasure(treasureId);
};

Clarity.prototype.cancelTreasurePrompt = function () {
    this._treasurePromptActive = false;
    this._treasurePromptTileX = null;
    this._treasurePromptTileY = null;
    this.onTreasurePromptDismiss = null;
};

Clarity.prototype._doGoToTreasure = function (treasureId) {
    if (!this.modularData) return false;
    for (var i = 0; i < this.modularData.maps.length; i++) {
        if (this.modularData.maps[i].type === 'treasure' && this.modularData.maps[i].treasureId === treasureId) {
            this._savedLevelState = this.getLevelState();
            if (typeof this.onBeforeTreasureExit === 'function') {
                this.onBeforeTreasureExit(this.modularIndex, this._savedLevelState);
            }
            this.treasureReturnIndex = this.modularIndex;
            this.checkpoint = null;
            this.oneTimeTriggered = {};
            this.loadModularMap(i);
            this._treasureCooldown = Date.now() + 3000;
            return true;
        }
    }
    this.error('Treasure map with ID ' + treasureId + ' not found.');
    return false;
};

Clarity.prototype.handleDeath = function () {
    this.key.left = false;
    this.key.right = false;
    this.key.up = false;
    this.showMessage("You died!");
    if (this.checkpoint) {
        // Keep oneTimeTriggered — triggers already passed are done
        var cp = this.checkpoint;
        if (this.modularData) {
            this.loadModularMap(this.modularIndex);
        } else if (this.source_map) {
            this.load_map(JSON.parse(JSON.stringify(this.source_map)));
        }
        this.player.loc.x = cp.playerX;
        this.player.loc.y = cp.playerY;
        this.player.colour = cp.playerColour;
        cp.doorStates.forEach(function (state) {
            var door = this.current_map.keys.find(function (k) { return k.id === state.id; });
            if (door) {
                door.solid = state.solid;
                door.colour = state.colour;
            }
        }, this);
    } else {
        this.oneTimeTriggered = {};
        if (this.modularData) {
            this.loadModularMap(this.modularIndex);
        } else if (this.source_map) {
            this.load_map(JSON.parse(JSON.stringify(this.source_map)));
        }
    }
};

Clarity.prototype.draw = function (context) {

    this.draw_map(context, false);
    this.draw_player(context);
};
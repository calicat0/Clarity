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

    this.clearTasks();

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
    mapData.scripts.next_level = 'this.checkpoint=null;if(typeof this.onLevelCompleted==="function")this.onLevelCompleted(this.modularIndex);if(this.modularData){if(this.modularIndex+1<this.modularData.maps.length){this.loadModularMap(this.modularIndex+1);}else{this.showMessage("All levels complete!");}}else{this.showMessage("You win!");this.load_map(this.source_map);}';
    mapData.scripts.death = '';
    this.source_map = mapData;
    this.load_map(mapData);
    this.limit_viewport = true;
};

Clarity.prototype.get_tile = function (x, y) {

    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};

Clarity.prototype.draw_tile = function (x, y, tile, context) {

    if (!tile || !tile.colour) return;

    context.fillStyle = tile.colour;
    context.fillRect(
        Math.round(x),
        Math.round(y),
        this.tile_size,
        this.tile_size
    );
};

Clarity.prototype.draw_map = function (context, fore) {

    for (var y = 0; y < this.current_map.data.length; y++) {

        for (var x = 0; x < this.current_map.data[y].length; x++) {

            if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {

                var t_x = (x * this.tile_size) - this.camera.x;
                var t_y = (y * this.tile_size) - this.camera.y;
                
                if(t_x < -this.tile_size
                || t_y < -this.tile_size
                || t_x > this.viewport.x
                || t_y > this.viewport.y) continue;
                
                this.draw_tile(
                    t_x,
                    t_y,
                    this.current_map.data[y][x],
                    context
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
        }
        
    }
    
    // adjust camera

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
    
    if(this.last_tile != tile.id && tile.script) {
        if (tile.script === "death") {
            this.handleDeath();
        } else {
            eval(this.current_map.scripts[tile.script]);
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

Clarity.prototype.update = function () {

    this.update_player();
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
};

Clarity.prototype.handleDeath = function () {
    this.key.left = false;
    this.key.right = false;
    this.key.up = false;
    this.showMessage("You died!");
    if (this.checkpoint) {
        var cp = this.checkpoint;
        if (this.modularData) {
            this.loadModularMap(this.modularIndex);
        } else if (this.source_map) {
            this.load_map(this.source_map);
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
        if (this.modularData) {
            this.loadModularMap(this.modularIndex);
        } else if (this.source_map) {
            this.load_map(this.source_map);
        }
    }
};

Clarity.prototype.draw = function (context) {

    this.draw_map(context, false);
    this.draw_player(context);
};
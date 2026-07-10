loadModularData({
  name: "Midnight",
  maps: [
    {name: "Level 1", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#0a0a14", solid: 0},
  {id: 1, colour: "#1a1a2e", solid: 0},
  {id: 2, colour: "#2a2a4e", solid: 1, bounce: 0.35},
  {id: 3, colour: "#4a4a8e", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#3a2a5e", jump: 1},
  {id: 5, colour: "#8a4aae", solid: 1, bounce: 1.1},
  {id: 6, colour: "#1a1a3e", solid: 1, bounce: 0},
  {id: 7, colour: "#6a4a8e", solid: 0, script: "change_colour"},
  {id: 8, colour: "#e0b040", solid: 0, script: "next_level"},
  {id: 9, colour: "#c03030", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#2a2a5e", solid: 1},
  {id: 11, colour: "#4a8ace", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#1e1e44", name: "Door 14", solid: 1, isDoor: true, themeLinked: "door"},
  {id: 15, colour: "#88cc44", name: "14", solid: 0, isKey: true, unlocks: 14, themeLinked: "key", script: "combined_15", opaque: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, isTask: true, taskId: 1, taskType: "timeout", taskMessage: "Door unlocked", taskOneTime: true, taskDuration: 5},
  {id: 16, colour: "#d4a800", name: "Fun room", solid: 0, isTreasureExit: true, treasureTargetId: 1, script: "treasure_exit_16"},
  {id: 17, colour: "#1a1a2e", name: "Door 17", solid: 0, isDoor: true, themeLinked: "door", opaque: 0},
  {id: 18, colour: "#3d5c1f", name: "bounce unlock", solid: 0, isKey: true, unlocks: 17, themeLinked: "key", script: "combined_18", opaque: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, isTask: true, taskId: 1, taskType: "timeout", taskMessage: "Something changed...", taskOneTime: true, taskDuration: 5},
  {id: 19, colour: "#2a2a4e", name: "falling", solid: 1, opaque: 0, fade: 1, fadeDelay: 0.5, fadeDuration: 0.4, fadeRespawn: 3, groupFade: 1}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 1, 12, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 2],
  [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 2],
  [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 7, 1, 7, 1, 7, 2],
  [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 18, 1, 1, 1, 1, 7, 7, 7, 1, 2],
  [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 7, 1, 1, 2],
  [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 9, 9, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 16, 16, 1, 1, 1, 2, 2, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 9, 9, 2, 2, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 17, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 9, 9, 9, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 19, 19, 1, 19, 19, 19, 19, 1, 19, 19, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 19, 19, 1, 19, 19, 19, 19, 1, 19, 19, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 2]
], gravity: {
  x: 0,
  y: 0.3
}, vel_limit: {
  x: 2,
  y: 16
}, movement_speed: {
  jump: 6,
  left: 0.3,
  right: 0.3
}, player: {
  x: 6,
  y: 31,
  colour: "#FF9900"
}, light_radius: 8, ambient_brightness: 0, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);",
  treasure_exit_16: "this.goToTreasure(1);",
  combined_15: "var door=this.current_map.keys.find(function(k){return k.id===14;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;} this.activateCheckpoint(15); this.addTask(1,\"Door unlocked\",\"timeout\",5,true);",
  combined_18: "var door=this.current_map.keys.find(function(k){return k.id===17;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;} this.activateCheckpoint(18); this.addTask(1,\"Something changed...\",\"timeout\",5,true);"
}, automations: [
  {id: 1, name: "unlock bounce pad", enabled: true, once: true, trigger: {
  type: "tile_step",
  params: {
    tileId: 18
  }
}, actions: [
  {type: "change_new_block", params: {
  targetId: 17,
  newName: "",
  newColSource: "theme",
  newColThemeIdx: 5,
  newColour: "#ff9900",
  newSolid: true,
  newOpaque: false,
  newLightPasses: false,
  newBounce: 1.1,
  newJump: false,
  newFore: false,
  newFrictionX: 0,
  newFrictionY: 0,
  newGravityX: 0,
  newGravityY: 0,
  newIsDeath: false,
  newIsKey: false,
  newUnlocks: 0,
  newIsDoor: false,
  newLockKey: 0,
  newFade: false,
  newFadeDelay: 0.5,
  newFadeDuration: 0.4,
  newFadeRespawn: 3,
  newGroupFade: false,
  newIsTreasureExit: false,
  newTreasureTargetId: 0,
  newIsCheckpoint: false,
  newSaveDoorStates: true,
  newOneTimeOnly: true,
  newExtraCommand: false,
  newRespawnMsg: "",
  newExtraTargetId: 0,
  newExtraTargetColour: "#ff9900",
  newIsTask: false,
  newTaskId: 1,
  newTaskType: "persistent",
  newTaskMsg: "",
  newTaskDuration: 5,
  newTaskOnce: true,
  newCompletesTaskId: 0
}}
]}
], themePalette: ["#333", "#888", "#555", "#79DCF2", "#777", "#E373FA", "#666", "#73C6FA", "#FADF73", "#C93232", "#555", "#0FF", "#4a4a4a", "#CCFF00"], currentTheme: "Original"},
    {name: "Fun map!", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#0a0a14", solid: 0},
  {id: 1, colour: "#1a1a2e", solid: 0},
  {id: 2, colour: "#2a2a4e", solid: 1, bounce: 0.35},
  {id: 3, colour: "#4a4a8e", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#3a2a5e", jump: 1},
  {id: 5, colour: "#8a4aae", solid: 1, bounce: 1.1},
  {id: 6, colour: "#1a1a3e", solid: 1, bounce: 0},
  {id: 7, colour: "#6a4a8e", solid: 0, script: "change_colour"},
  {id: 8, colour: "#e0b040", solid: 0, script: "next_level"},
  {id: 9, colour: "#c03030", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#2a2a5e", solid: 1},
  {id: 11, colour: "#4a8ace", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#ff00ff", name: "TIP", solid: 0, isTask: true, taskId: 1, taskType: "persistent", taskMessage: "TIP: Jump mid-air to slow down", taskOneTime: true, script: "combined_14"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 9, 9, 9, 9, 9, 9, 9, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 9, 9, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 5, 9, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 9, 1, 2],
  [2, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
], gravity: {
  x: 0,
  y: 0.3
}, vel_limit: {
  x: 2,
  y: 16
}, movement_speed: {
  jump: 6,
  left: 0.3,
  right: 0.3
}, player: {
  x: 2,
  y: 2,
  colour: "#FF9900"
}, light_radius: 8, ambient_brightness: 0, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);",
  combined_14: "this.addTask(1,\"TIP: Jump mid-air to slow down\",\"persistent\",5,true);"
}, type: "treasure", treasureId: 1, automations: [], themePalette: ["#333", "#888", "#555", "#79DCF2", "#777", "#E373FA", "#666", "#73C6FA", "#FADF73", "#C93232", "#555", "#0FF", "#4a4a4a", "#CCFF00"], currentTheme: "Original"},
    {name: "Level 2", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#0a0a14", solid: 0},
  {id: 1, colour: "#1a1a2e", solid: 0},
  {id: 2, colour: "#2a2a4e", solid: 1, bounce: 0.35},
  {id: 3, colour: "#4a4a8e", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#3a2a5e", jump: 1},
  {id: 5, colour: "#8a4aae", solid: 1, bounce: 1.1},
  {id: 6, colour: "#1a1a3e", solid: 1, bounce: 0},
  {id: 7, colour: "#6a4a8e", solid: 0, script: "change_colour"},
  {id: 8, colour: "#e0b040", solid: 0, script: "next_level"},
  {id: 9, colour: "#c03030", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#2a2a5e", solid: 1},
  {id: 11, colour: "#4a8ace", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Fade Floor", fade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 15, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Group Fade Floor", fade: 1, groupFade: 1, fadeDelay: 0.5, fadeRespawn: 1, fadeDuration: 0.4, themeLinked: "fade", opaque: 0},
  {id: 16, colour: "#1e1e44", name: "Door 16", solid: 1, isDoor: true, themeLinked: "door"},
  {id: 17, colour: "#88cc44", name: "16", solid: 0, isKey: true, unlocks: 16, themeLinked: "key", script: "combined_17", opaque: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, isTask: true, taskId: 1, taskType: "timeout", taskMessage: "Doors unlocked", taskOneTime: true, taskDuration: 3},
  {id: 18, colour: "#1e1e44", name: "Door 18", solid: 1, isDoor: true, themeLinked: "door"},
  {id: 19, colour: "#88cc44", name: "18", solid: 0, isKey: true, unlocks: 18, themeLinked: "key", script: "combined_19", opaque: 0, isTask: true, taskId: 1, taskType: "timeout", taskMessage: "Door unlocked", taskOneTime: true, taskDuration: 5},
  {id: 20, colour: "#d4a800", name: "Challenge #1", solid: 0, isTreasureExit: true, treasureTargetId: 2, script: "treasure_exit_20"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 2, 1, 1, 8, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 9, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 9, 2, 9, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 2, 9, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [2, 9, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 9, 2, 9, 1, 1, 1, 2, 9, 9, 9, 2, 2, 2, 2, 2, 1, 1, 2],
  [2, 9, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 9, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2],
  [2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 16, 17, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 16, 1, 1, 1, 1, 1, 1, 16, 17, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 2, 9, 9, 2, 9, 1, 1, 1, 2, 1, 1, 1, 1, 1, 9, 2, 2, 2, 9, 1, 1, 1, 9, 2, 1, 2],
  [2, 1, 1, 1, 2, 9, 9, 2, 9, 1, 1, 1, 2, 15, 15, 15, 15, 15, 15, 2, 2, 2, 2, 2, 1, 1, 2, 20, 1, 2],
  [2, 1, 1, 1, 1, 2, 2, 9, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 1, 2],
  [2, 1, 9, 9, 1, 1, 1, 1, 1, 1, 9, 9, 2, 9, 9, 1, 1, 1, 1, 2, 9, 1, 1, 1, 1, 9, 9, 2, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
], gravity: {
  x: 0,
  y: 0.3
}, vel_limit: {
  x: 2,
  y: 16
}, movement_speed: {
  jump: 6,
  left: 0.3,
  right: 0.3
}, player: {
  x: 15,
  y: 4,
  colour: "#FF9900"
}, light_radius: 8, ambient_brightness: 0, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);",
  treasure_exit_20: "this.goToTreasure(2);",
  combined_17: "var door=this.current_map.keys.find(function(k){return k.id===16;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;} this.activateCheckpoint(17); this.addTask(1,\"Doors unlocked\",\"timeout\",3,true);",
  combined_19: "var door=this.current_map.keys.find(function(k){return k.id===18;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;} this.addTask(1,\"Door unlocked\",\"timeout\",5,true);"
}, automations: [], themePalette: ["#333", "#888", "#555", "#79DCF2", "#777", "#E373FA", "#666", "#73C6FA", "#FADF73", "#C93232", "#555", "#0FF", "#4a4a4a", "#CCFF00"], currentTheme: "Original"},
    {name: "Challenge #1", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#0a0a14", solid: 0},
  {id: 1, colour: "#1a1a2e", solid: 0},
  {id: 2, colour: "#2a2a4e", solid: 1, bounce: 0.35},
  {id: 3, colour: "#4a4a8e", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#3a2a5e", jump: 1},
  {id: 5, colour: "#8a4aae", solid: 1, bounce: 1.1},
  {id: 6, colour: "#1a1a3e", solid: 1, bounce: 0},
  {id: 7, colour: "#6a4a8e", solid: 0, script: "change_colour"},
  {id: 8, colour: "#e0b040", solid: 0, script: "next_level"},
  {id: 9, colour: "#c03030", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#2a2a5e", solid: 1},
  {id: 11, colour: "#4a8ace", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Fade Floor", fade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 15, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Group Fade Floor", fade: 1, groupFade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 15, 15, 15, 1, 1, 2],
  [2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 15, 15, 15, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 15, 15, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 9, 1, 1, 1, 9, 9, 9, 2, 1, 1, 15, 15, 15, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 9, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 15, 15, 15, 1, 2],
  [2, 9, 9, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 15, 15, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 15, 15, 15, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 5, 5, 1, 1, 2, 1, 15, 15, 15, 1, 1, 1, 1, 1, 1, 2],
  [2, 15, 15, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 15, 15, 15, 1, 1, 2],
  [2, 14, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 9, 9, 1, 1, 1, 1, 1, 3, 12, 1, 15, 15, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2]
], gravity: {
  x: 0,
  y: 0.3
}, vel_limit: {
  x: 2,
  y: 16
}, movement_speed: {
  jump: 6,
  left: 0.3,
  right: 0.3
}, player: {
  x: 2,
  y: 2,
  colour: "#FF9900"
}, light_radius: 8, ambient_brightness: 0, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);"
}, type: "treasure", treasureId: 2},
    {name: "Level 3", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#0a0a14", solid: 0},
  {id: 1, colour: "#1a1a2e", solid: 0},
  {id: 2, colour: "#2a2a4e", solid: 1, bounce: 0.35},
  {id: 3, colour: "#4a4a8e", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#3a2a5e", jump: 1},
  {id: 5, colour: "#8a4aae", solid: 1, bounce: 1.1},
  {id: 6, colour: "#1a1a3e", solid: 1, bounce: 0},
  {id: 7, colour: "#6a4a8e", solid: 0, script: "change_colour"},
  {id: 8, colour: "#e0b040", solid: 0, script: "next_level"},
  {id: 9, colour: "#c03030", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#2a2a5e", solid: 1},
  {id: 11, colour: "#4a8ace", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Fade Floor", fade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 15, colour: "#2a2a4e", solid: 1, bounce: 0.35, name: "Group Fade Floor", fade: 1, groupFade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 16, colour: "#1e1e44", name: "Door 16", solid: 1, isDoor: true, themeLinked: "door"},
  {id: 17, colour: "#88cc44", name: "16", solid: 0, isKey: true, unlocks: 16, themeLinked: "key", script: "unlock_17"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 9, 9, 9, 9, 9, 2, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 8, 1, 1, 2, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 14, 14, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 9, 9, 9, 9, 9, 9, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 5, 5, 5, 1, 1, 9, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 15, 15, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 2, 6, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 15, 15, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 12, 1, 1, 1, 1, 1, 1, 1, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 15, 15, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
], gravity: {
  x: 0,
  y: 0.3
}, vel_limit: {
  x: 2,
  y: 16
}, movement_speed: {
  jump: 6,
  left: 0.3,
  right: 0.3
}, player: {
  x: 28,
  y: 10,
  colour: "#FF9900"
}, light_radius: 8, ambient_brightness: 0, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);",
  unlock_17: "var door=this.current_map.keys.find(function(k){return k.id===16;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}"
}}
  ]
});

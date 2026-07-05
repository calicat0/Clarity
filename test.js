loadModularData({
  name: "New Map",
  maps: [
    {name: "New Map", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#333", solid: 0},
  {id: 1, colour: "#888", solid: 0},
  {id: 2, colour: "#555", solid: 1, bounce: 0.35},
  {id: 3, colour: "rgba(121, 220, 242, 0.4)", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#777", jump: 1},
  {id: 5, colour: "#E373FA", solid: 1, bounce: 1.1},
  {id: 6, colour: "#666", solid: 1, bounce: 0},
  {id: 7, colour: "#73C6FA", solid: 0, script: "change_colour"},
  {id: 8, colour: "#FADF73", solid: 0, script: "next_level"},
  {id: 9, colour: "#C93232", solid: 0, script: "death", opaque: 1},
  {id: 10, colour: "#555", solid: 1},
  {id: 11, colour: "#0FF", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#C93232", solid: 0, script: "death", lightPasses: true},
  {id: 14, colour: "#555", solid: 1, bounce: 0.35, name: "Fade Floor", fade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 15, colour: "#555", solid: 1, bounce: 0.35, name: "Group Fade Floor", fade: 1, groupFade: 1, fadeDelay: 0.5, fadeRespawn: 3, fadeDuration: 0.4, themeLinked: "fade"},
  {id: 16, colour: "#555", solid: 1, bounce: 0.35},
  {id: 17, colour: "#888", solid: 0},
  {id: 18, colour: "#888", solid: 0, name: "Trigger"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 17, 17, 17, 17, 17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
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
}, light_radius: 8, ambient_brightness: 0.05, light_falloff: 5, light_shape: "circle", light_trails: true, trail_fade_speed: 0.01, trail_max_brightness: 1, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "var door=this.current_map.keys.find(function(k){return k.id===10;});if(door&&door.solid){door.solid=0;door.colour=this.current_map.keys.find(function(k){return k.id===1;}).colour;}",
  combined_12: "this.activateCheckpoint(12);"
}, automations: [
  {id: 1, name: "first trap", enabled: true, once: true, trigger: {
  type: "tile_step",
  params: {
    tileId: 18
  }
}, actions: [
  {type: "change_new_block", params: {
  targetId: 16,
  newColSource: "theme",
  newColThemeIdx: 1,
  newColour: "#ff9900",
  newSolid: false,
  newOpaque: false,
  newBounce: 0,
  newJump: false,
  newFore: false,
  newName: ""
}},
  {type: "wait", params: {
  duration: 1
}},
  {type: "change_new_block", params: {
  targetId: 17,
  newColSource: "theme",
  newColThemeIdx: 2,
  newColour: "#ff9900",
  newSolid: true,
  newOpaque: false,
  newBounce: 0,
  newJump: false,
  newFore: false,
  newName: ""
}},
  {type: "wait", params: {
  duration: 1
}},
  {type: "change_new_block", params: {
  targetId: 17,
  newColSource: "theme",
  newColThemeIdx: 1,
  newColour: "#ff9900",
  newSolid: false,
  newOpaque: false,
  newBounce: 0,
  newJump: false,
  newFore: false,
  newName: ""
}}
]}
], themePalette: ["#333", "#888", "#555", "#79DCF2", "#777", "#E373FA", "#666", "#73C6FA", "#FADF73", "#C93232", "#555", "#0FF", "#4a4a4a", "#CCFF00"], currentTheme: "Original"}
  ]
});

loadModularData({
  name: "Challenge 1 - Gauntlet",
  maps: [
    {name: "The beginning", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#1a0000", solid: 0},
  {id: 1, colour: "#4a1a1a", solid: 0},
  {id: 2, colour: "#8b3a3a", solid: 1, bounce: 0.35},
  {id: 3, colour: "#FF6400", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#cc5500", jump: 1},
  {id: 5, colour: "#FF4500", solid: 1, bounce: 1.1},
  {id: 6, colour: "#660000", solid: 1, bounce: 0},
  {id: 7, colour: "#FF6347", solid: 0, script: "change_colour"},
  {id: 8, colour: "#FFD700", solid: 0, script: "next_level"},
  {id: 9, colour: "#8B0000", solid: 0, script: "death"},
  {id: 10, colour: "#5c1a1a", solid: 1},
  {id: 11, colour: "#00FFFF", solid: 0, script: "unlock"},
  {id: 12, colour: "#b62f2f", name: "door1", solid: 1, isDoor: true},
  {id: 13, colour: "#5c4242", name: "key1", solid: 0, isKey: true, unlocks: 12, script: "unlock_12"},
  {id: 14, colour: "#ffffff", name: "checkpoint", solid: 0, script: "checkpoint_14", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"},
  {id: 15, colour: "#ff0000", name: "no bounce", solid: 1, bounce: -100000},
  {id: 16, colour: "#ffffff", name: "checkpoint 2", solid: 0, script: "checkpoint_16", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"},
  {id: 17, colour: "#4b3f3f", name: "key2", solid: 0, isKey: true},
  {id: 18, colour: "#ff0000", name: "door2", solid: 1, isDoor: true, lockKey: 17},
  {id: 19, colour: "#ff0000", name: "checkpoint 3", solid: 0, script: "checkpoint_19", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 9, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 1, 12, 1, 1, 14, 1, 1, 1, 1, 1, 2, 9, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 2, 9, 9, 2, 1, 9, 9, 2, 2, 2, 9, 2, 2, 2, 2, 9, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 9, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2, 4, 4, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 2, 15, 15, 15, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 1, 1, 9, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 13, 1, 4, 4, 2, 1, 2, 2, 2, 2, 9, 9, 2, 2, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 2, 9, 9, 1, 9, 1, 1, 16, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
  [2, 8, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
  [2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 2, 2, 2, 9, 2]
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
}, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = \"#888\";",
  unlock_12: "var door=this.current_map.keys.find(function(k){return k.id===12;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}",
  checkpoint_14: "this.activateCheckpoint(14);",
  checkpoint_16: "this.activateCheckpoint(16);",
  checkpoint_19: "this.activateCheckpoint(19);"
}},
    {name: "There's no going back", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#1a0000", solid: 0},
  {id: 1, colour: "#4a1a1a", solid: 0},
  {id: 2, colour: "#8b3a3a", solid: 1, bounce: 0.35},
  {id: 3, colour: "#FF6400", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#cc5500", jump: 1},
  {id: 5, colour: "#FF4500", solid: 1, bounce: 1.1},
  {id: 6, colour: "#660000", solid: 1, bounce: 0},
  {id: 7, colour: "#FF6347", solid: 0, script: "change_colour"},
  {id: 8, colour: "#FFD700", solid: 0, script: "next_level"},
  {id: 9, colour: "#8B0000", solid: 0, script: "death"},
  {id: 10, colour: "#5c1a1a", solid: 1},
  {id: 11, colour: "#00FFFF", solid: 0, script: "unlock"},
  {id: 12, colour: "#FFFFFF", solid: 0, isCheckpoint: true, saveDoorStates: true, oneTimeOnly: true, respawnMessage: "Checkpoint saved!", script: "combined_12"},
  {id: 13, colour: "#ff00ff", name: "task 1", solid: 0, isTask: true, taskId: 1, taskType: "persistent", taskMessage: "Get the key!!", taskOneTime: true, script: "combined_13"},
  {id: 14, colour: "#eeff00", name: "key for task", solid: 0, isKey: true, unlocks: 15, script: "combined_14", completesTaskId: 1},
  {id: 15, colour: "#7b6b6b", name: "door1", solid: 1, isDoor: true, lockKey: 14},
  {id: 16, colour: "#fff700", name: "key2", solid: 0, isKey: true, unlocks: 17, script: "combined_16"},
  {id: 17, colour: "#6d5f5f", name: "door2", solid: 1, isDoor: true, lockKey: 16},
  {id: 18, colour: "#fadf73", name: "fake win", solid: 0, script: "death"},
  {id: 19, colour: "#ff0000", name: "key3", solid: 0, isKey: true, unlocks: 20, script: "combined_19"},
  {id: 20, colour: "#eeff00", name: "key 3", solid: 0, isKey: true, unlocks: 21, script: "combined_20"},
  {id: 21, colour: "#766060", name: "door3", solid: 1, isDoor: true, lockKey: 20}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 9, 9, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 1, 9, 2],
  [2, 2, 2, 2, 15, 15, 15, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 2, 2],
  [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 9, 2, 9, 1, 1, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 2, 9, 1, 9, 2, 1, 1, 1, 3, 3, 3, 9, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 18, 2],
  [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 1, 1, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 3, 9, 3, 3, 3, 9, 2, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 9, 9, 9, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 9, 3, 3, 1, 1, 1, 1, 1, 1, 9, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 17, 17, 17, 17, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 9, 1, 2, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 8, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 9, 10, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 10, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 9, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 18, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 21, 21, 21, 21, 21, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
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
}, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = \"#888\";",
  combined_12: "this.activateCheckpoint(12);",
  combined_13: "this.addTask(1,\"Get the key!!\",\"persistent\",40,true);",
  combined_14: "var door=this.current_map.keys.find(function(k){return k.id===15;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";} this.completeTask(1);",
  combined_16: "var door=this.current_map.keys.find(function(k){return k.id===17;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}",
  combined_19: "var door=this.current_map.keys.find(function(k){return k.id===20;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}",
  combined_20: "var door=this.current_map.keys.find(function(k){return k.id===21;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}"
}},
    {name: "Death Tower", tile_size: 16, background: "#333", keys: [
  {id: 0, colour: "#1a0000", solid: 0},
  {id: 1, colour: "#4a1a1a", solid: 0},
  {id: 2, colour: "#8b3a3a", solid: 1, bounce: 0.35},
  {id: 3, colour: "#FF6400", friction: {
  x: 0.9,
  y: 0.9
}, gravity: {
  x: 0,
  y: 0.1
}, jump: 1, fore: 1},
  {id: 4, colour: "#cc5500", jump: 1},
  {id: 5, colour: "#FF4500", solid: 1, bounce: 1.1},
  {id: 6, colour: "#660000", solid: 1, bounce: 0},
  {id: 7, colour: "#FF6347", solid: 0, script: "change_colour"},
  {id: 8, colour: "#FFD700", solid: 0, script: "next_level"},
  {id: 9, colour: "#8B0000", solid: 0, script: "death"},
  {id: 10, colour: "#5c1a1a", solid: 1},
  {id: 11, colour: "#00FFFF", solid: 0, script: "unlock"},
  {id: 12, colour: "#ff0000", name: "key1", solid: 0, isKey: true},
  {id: 13, colour: "#6d5454", name: "key1", solid: 0, isKey: true},
  {id: 14, colour: "#ff0000", name: "door1", solid: 1, isDoor: true, lockKey: 13},
  {id: 15, colour: "#ff0000", name: "checkpoint", solid: 0, script: "checkpoint_15", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"},
  {id: 16, colour: "#fafafa", name: "checkpoint", solid: 0, script: "checkpoint_16", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"},
  {id: 17, colour: "#ff0000", name: "key1", solid: 0, isKey: true, unlocks: 18, script: "unlock_18"},
  {id: 18, colour: "#514d4d", name: "key 1", solid: 0, isKey: true, unlocks: 19, script: "unlock_19"},
  {id: 19, colour: "#ff0000", name: "door1", solid: 0, isDoor: true, lockKey: 18}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 9, 0, 0, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 9, 9, 9, 0, 9, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 9, 2],
  [2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 0, 0, 0, 9, 9, 0, 2, 2, 2, 2, 2, 2, 5, 2, 0, 0, 0, 0, 0, 0, 9, 0, 9, 18, 0, 2],
  [2, 0, 0, 0, 0, 0, 9, 2, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 9, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 3, 3, 2, 2, 0, 9, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 2],
  [2, 3, 9, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 9, 0, 0, 0, 0, 2, 2, 9, 0, 9, 0, 2, 2],
  [2, 3, 3, 2, 0, 2, 2, 9, 0, 2, 0, 0, 0, 0, 9, 0, 0, 0, 0, 19, 0, 0, 16, 0, 0, 2, 2],
  [2, 3, 3, 2, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 2, 2, 2, 2, 2, 2, 0, 2],
  [2, 9, 3, 2, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 9, 9, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 3, 3, 2, 0, 0, 0, 9, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 3, 3, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 2],
  [2, 3, 9, 2, 0, 0, 2, 2, 2, 9, 2, 2, 0, 0, 2, 2, 2, 9, 2, 2, 0, 0, 0, 0, 2, 3, 2],
  [2, 3, 3, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 9, 0, 2, 3, 2],
  [2, 3, 3, 2, 0, 0, 9, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 3, 2],
  [2, 9, 3, 2, 0, 0, 9, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 16, 0, 0, 0, 0, 0, 3, 2],
  [2, 3, 3, 2, 0, 0, 2, 0, 0, 0, 0, 2, 9, 9, 2, 0, 0, 2, 2, 2, 2, 2, 9, 2, 2, 3, 2],
  [2, 3, 3, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9, 2],
  [2, 3, 9, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 3, 3, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 2],
  [2, 3, 3, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 2],
  [2, 9, 3, 3, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2],
  [2, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2],
  [2, 9, 3, 3, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 2],
  [2, 2, 9, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2]
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
}, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = \"#888\";",
  checkpoint_15: "this.activateCheckpoint(15);",
  checkpoint_16: "this.activateCheckpoint(16);",
  unlock_18: "var door=this.current_map.keys.find(function(k){return k.id===18;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}",
  unlock_19: "var door=this.current_map.keys.find(function(k){return k.id===19;});if(door&&door.solid){door.solid=0;door.colour=\"#888\";}"
}},
    {name: "Horrible Mistake", tile_size: 16, background: "#333", keys: [
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
  {id: 9, colour: "#C93232", solid: 0, script: "death"},
  {id: 10, colour: "#555", solid: 1},
  {id: 11, colour: "#0FF", solid: 0, script: "unlock"},
  {id: 12, colour: "#222222", name: "sneaky death", solid: 0, script: "death"},
  {id: 13, colour: "#363636", name: "sneak death2", solid: 0, script: "death"},
  {id: 14, colour: "#424242", name: "invis", solid: 0, jump: 1},
  {id: 15, colour: "#4f4f4f", name: "invis", solid: 0},
  {id: 16, colour: "#4b4b4b", name: "invis", solid: 0},
  {id: 17, colour: "#494949", name: "g", solid: 0},
  {id: 18, colour: "#474747", name: "gg", solid: 0},
  {id: 19, colour: "#4c4949", name: "gy", solid: 0},
  {id: 20, colour: "#474747", name: "kill", solid: 0, script: "death"},
  {id: 21, colour: "#d4d4d4", name: "block", solid: 1},
  {id: 22, colour: "#317990", name: "death water", solid: 0, script: "death"},
  {id: 23, colour: "#ffffff", name: "checkpoint", solid: 0, script: "checkpoint_23", isCheckpoint: true, saveDoorStates: true, respawnMessage: "Checkpoint saved!"}
], data: [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 8, 15, 15, 15, 15, 20, 15, 15, 2, 15, 1, 1, 1, 1, 20, 1, 1, 1, 2],
  [2, 20, 15, 15, 15, 15, 15, 15, 20, 2, 15, 1, 1, 1, 1, 20, 1, 1, 1, 2],
  [2, 15, 2, 15, 2, 15, 15, 15, 15, 2, 15, 2, 2, 15, 20, 20, 20, 15, 2, 20],
  [2, 15, 15, 15, 15, 15, 15, 15, 15, 2, 15, 2, 15, 15, 15, 2, 20, 15, 20, 2],
  [2, 15, 15, 15, 15, 15, 15, 15, 2, 2, 15, 2, 15, 3, 3, 2, 20, 3, 3, 2],
  [2, 15, 15, 15, 15, 20, 2, 20, 15, 2, 15, 2, 15, 2, 3, 2, 15, 15, 15, 2],
  [2, 15, 15, 15, 15, 15, 15, 15, 15, 2, 15, 2, 3, 3, 3, 2, 3, 3, 3, 2],
  [2, 15, 20, 15, 15, 15, 15, 15, 15, 2, 15, 2, 3, 15, 3, 2, 15, 20, 20, 2],
  [2, 15, 15, 2, 15, 20, 15, 15, 15, 2, 15, 2, 15, 15, 3, 2, 3, 3, 20, 2],
  [2, 15, 15, 20, 15, 15, 15, 15, 15, 2, 15, 2, 20, 15, 20, 2, 3, 20, 20, 2],
  [2, 15, 15, 20, 15, 15, 15, 15, 15, 2, 15, 2, 15, 15, 20, 2, 3, 20, 20, 2],
  [2, 15, 15, 20, 2, 20, 15, 15, 20, 2, 15, 2, 3, 3, 3, 2, 3, 20, 15, 2],
  [2, 15, 15, 15, 15, 15, 15, 2, 15, 2, 15, 2, 15, 15, 20, 3, 3, 20, 3, 2],
  [2, 15, 15, 15, 15, 15, 15, 20, 15, 2, 15, 2, 20, 15, 15, 20, 15, 15, 3, 2],
  [2, 15, 15, 15, 15, 15, 15, 20, 15, 2, 15, 2, 20, 15, 15, 20, 20, 3, 3, 2],
  [2, 15, 15, 15, 15, 15, 2, 15, 15, 2, 15, 2, 2, 15, 2, 2, 20, 20, 15, 2],
  [2, 20, 15, 15, 15, 20, 15, 15, 15, 2, 15, 2, 20, 15, 20, 2, 20, 3, 15, 2],
  [2, 15, 15, 15, 15, 20, 15, 15, 15, 2, 15, 2, 20, 3, 20, 2, 20, 20, 15, 2],
  [2, 15, 15, 20, 2, 20, 15, 15, 15, 2, 15, 2, 20, 15, 20, 2, 20, 3, 15, 2],
  [2, 15, 15, 20, 20, 20, 15, 15, 15, 2, 15, 2, 20, 15, 15, 2, 15, 3, 3, 2],
  [2, 2, 15, 15, 15, 15, 15, 15, 15, 15, 1, 2, 15, 15, 15, 2, 22, 15, 3, 2],
  [2, 20, 15, 15, 15, 1, 1, 1, 1, 1, 1, 2, 3, 2, 15, 15, 20, 15, 20, 2],
  [2, 15, 15, 15, 15, 1, 1, 1, 1, 1, 1, 2, 3, 15, 15, 1, 1, 15, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 3, 15, 15, 1, 1, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 1, 23, 1, 2, 3, 15, 15, 23, 1, 20, 15, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2],
  [2, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2],
  [2, 2, 2, 2, 20, 20, 15, 2, 2, 15, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2]
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
  x: 18,
  y: 2,
  colour: "#FF9900"
}, scripts: {
  change_colour: "this.player.colour = \"#\"+(Math.random()*0xFFFFFF<<0).toString(16);",
  next_level: "alert(\"You win!\");this.load_map(this.source_map);",
  death: "alert(\"You died!\");this.load_map(this.source_map);",
  unlock: "this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = \"#888\";",
  checkpoint_23: "this.activateCheckpoint(23);"
}}
  ]
});

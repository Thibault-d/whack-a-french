console.log('main.js is connected');
var startButton = document.getElementById('start');
let mygame = new Game(9);
let mymobs = new Mob;
mygame.start();
mymobs.newMob();

console.log('main.js is connected');
var startButton = document.getElementById('start');
let mymobs = new Mob;
let mygame = new Game(9,1000,10);
mymobs.newMob();
mygame.start();


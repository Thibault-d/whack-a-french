console.log('main.js is connected');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var resetButton = document.getElementById('reset');
let mymobs = new Mob;
let mygame = new Game(9,1000,3);
mymobs.newMob();
mygame.start();

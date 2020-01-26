console.log('main.js is connected')
var startButton = document.getElementById('start');


class game {
    constructor() {
        this.time = 10;
    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            startTimer();
        }

    }
}

var mygame = new game();
mygame.start();

function startTimer() {
    let timer = 10;
    status = 'start';

    let countdown = setInterval(function () {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').textContent = "TIME OUT";
        }
        if (status === 'reset') {
            clearInterval(countdown);
            document.getElementById('timer').textContent = 10;
        }
    }, 1000);

}



/* let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
var status = 'iddle';

function startTimer() {
    let timer = 10;
    status = 'start';

    let countdown = setInterval(function () {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0 ){
            clearInterval(countdown);
            document.getElementById('timer').textContent = "TIME OUT";
        } 
        if (status === 'reset' ){
            clearInterval(countdown);
            document.getElementById('timer').textContent = 10;
        } 
    }, 1000);

}

function start() {
    startButton.onclick = function () {
        console.log('start');
        startTimer();
    }
}

function pause() {
    pauseButton.onclick = function () {
        console.log('pause');
    }
}

function reset() {
    resetButton.onclick = function () {
        console.log('reset');
        status = 'reset';
        
    }
}

pause();
start();
reset();
*/
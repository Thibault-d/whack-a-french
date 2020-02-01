class Game {
    constructor(level, speed, time) {
        this.timeLeft = 3;
        this.randomDivs = 9;
        this.gridSize = level;
        this.speed = speed;
        this.countdown;
    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            this.startTimer(); // game timer
            this.createGrid(); // create the space for the mobs
            this.mobGenerator(); // puts a random mob on the grid every depending on the "speed" selected
            this.smash(); // when click on a mob, make it disappear
        }.bind(this)
    }

    startTimer() {
        this.countdown = setInterval(function () {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft; //show number of seconds left in the HTML score board

            if (this.timeLeft <= 0) {
                this.stopMobGenerator(); //stop generating mobs
                this.countdown = clearInterval(this.countdown); //stop this counter
            }
        }.bind(this), 1000);
    }

    createGrid() {
        for (let i = 0; i < this.gridSize; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'grid-item';
            newDiv.id = i;
            newDiv.onclick = function () {
                newDiv.innerHTML = '';

            }
            document.getElementsByClassName('grid-container')[0].append(newDiv);
        };
    }

    randomIntegerDiv() {
        var min = 0;
        var max = this.gridSize;
        var random =
            Math.floor(Math.random() * (+max - +min)) + +min;
        return random;
    }

    mobGenerator() {
        this.frequency = setInterval(function () {
            document.getElementById(this.randomIntegerDiv().toString()).innerHTML = mymobs.newMob().image; // take random mob
        }.bind(this), this.speed);
    }

    stopMobGenerator() {
        document.getElementById('timer').textContent = "TIME OUT";
        console.log('game stopped');
        this.frequency = clearInterval(this.countdown)
    }

    smash() {
        var childs = document.getElementsByClassName('grid-item'); //returns a HTMLCollection
        for (var i = 0; i < childs.length; i++) { //iterate over it to add the onclick method

            childs[i].addEventListener('click', function (e) { //execute a function onclick
                console.log('clicked', e);


            })
        }
    }

}
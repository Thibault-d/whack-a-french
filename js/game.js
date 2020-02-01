class Game {
    constructor(level, speed, gameTime) {
        this.timeLeft = gameTime;
        this.gridSize = level;
        this.speed = speed;
        this.countdown;
        this.remaining = gameTime;
        this.score = 0;
        this.mobTimer;
        this.mobDisappearTimer;
    }

    start() {
        startButton.onclick = function () {
            this.startTimer(); // game timer
            this.createGrid(); // create the space for the mobs
            this.mobGenerator(); // puts a random mob on the grid every depending on the "speed" selected
        }.bind(this)
    }

    startTimer() {
        this.gameTime = this.timeLeft;
        this.countdown = setInterval(function () {
            this.gameTime--;
            document.getElementById('timer').textContent = this.gameTime;
            if (this.gameTime <= 0) {
                document.getElementById('timer').textContent = "TIME OUT";
                clearInterval(this.mobTimer);
                clearInterval(this.countdown);
                clearInterval(this.mobDisappearTimer);
                this.resetGrid();
            }
        }.bind(this), 1000);
    }

    createGrid() {
        for (let i = 0; i < this.gridSize; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'grid-item';
            newDiv.id = i;
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
        this.mobTimer = setInterval(function () {
            let points =0;
            let currentMob = mymobs.newMob(); // create a new mob randomly
            let selectDivNumber = this.randomIntegerDiv().toString(); // generate a random number
            let currentDiv = document.getElementById(selectDivNumber); // select the div ID corresponding to the random number
            currentDiv.innerHTML = currentMob.image; // selected Div receives the image of the Mob

            currentDiv.onclick = function () { //onclick function, what happens when you smash
                currentDiv.innerHTML = ''; // remove the mob's image
                points = points + currentMob.scoreValue;
                console.log(points);
            }
            this.mobDisappearTimer = setInterval(function () {
                document.getElementById(selectDivNumber).innerHTML = '';
            }, 1500);
        }.bind(this), this.speed);
    }

    resetGrid() {
        document.getElementsByClassName('grid-container')[0].innerHTML = '';
    }

}
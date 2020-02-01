class Game {
    constructor(level, speed, gameTime) {
        this.timeLeft = gameTime;
        this.randomDivs = 9;
        this.gridSize = level;
        this.speed = speed;
        this.countdown;
        this.remaining = gameTime;
        this.score;
        this.mobTimer;
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
                this.resetGrid();
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
        this.mobTimer = setInterval(function () {
            document.getElementById(this.randomIntegerDiv().toString()).innerHTML = mymobs.newMob().image; // take random mob
        }.bind(this), this.speed);
    }

    resetGrid() {
        document.getElementsByClassName('grid-container')[0].innerHTML = '';

        }

}
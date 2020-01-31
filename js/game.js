class Game {
    constructor(level, speed) {
        this.timeLeft = 10;
        this.randomDivs = 9;
        this.gridSize = level;
        this.speed = speed;
    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            this.startTimer();
            this.createGrid();
            this.mobGenerator()
        }.bind(this)
    }

    startTimer() {
        let countdown = setInterval(function () {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                clearInterval(countdown);
                document.getElementById('timer').textContent = "TIME OUT";
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
        let frequency = setInterval(function () {
                document.getElementById(mygame.randomIntegerDiv().toString()).innerHTML = mymobs.newMob().image;

            },1000);
        }
    }
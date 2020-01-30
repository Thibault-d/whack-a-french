class Game {
    constructor(level) {
        this.timeLeft = 10;
        this.randomDivs = 9;
        this.gridSize = level;
    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            this.startTimer();
            this.createDiv();
            this.randomIntegerDiv();
            console.log(document.getElementById(mygame.randomIntegerDiv().toString()));
            console.log(mymobs.newMob());

            //document.getElementById(mygame.randomIntegerDiv().toString()).innerHTML = mymobs.newMob().image;
            document.getElementById(mygame.randomIntegerDiv().toString()).setAttribute() = mymobs.newMob();



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

    createDiv() {
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
}
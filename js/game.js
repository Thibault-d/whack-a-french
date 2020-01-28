class Game {
    constructor() {
        this.timeLeft = 10;
        this.randomDivs = 9;
        this.mob =  ;
    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            this.startTimer();
            this.createDiv();
        }.bind(this)
    }

    startTimer() {
        let countdown = setInterval(function () {
            this.timeLeft--;
            console.log(this.timeLeft);
            document.getElementById('timer').textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                clearInterval(countdown);
                document.getElementById('timer').textContent = "TIME OUT";
            }
        }.bind(this), 1000);

    }

    createDiv() {
        this.mob.forEach(element => {
            let newDiv = document.createElement('div');
            newDiv.className = 'grid-item';
            newDiv.textContent = element;
            document.getElementsByClassName('grid-container')[0].append(newDiv);
            console.log(newDiv);
        });
    }
}
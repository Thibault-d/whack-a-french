
class Game {
    constructor() {
        this.timeLeft = 10;
        this.randomDivs = 9;
        this.mobs = [1,1,1,1,1,1,1,1,1];

    }

    start() {
        startButton.onclick = function () {
            console.log('started');
            this.startTimer();
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
        this.mobs.forEach(element => {
            
            
        });

    }

    generate
}
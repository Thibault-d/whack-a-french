class Game {
    constructor(level, speed, gameTime) {
        this.timeLeft = gameTime;
        this.gridSize = level;
        this.speed = speed;
        this.countdown;
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

    reset() {
        document.getElementById('timer').textContent = "TIME OUT";
        this.mobDisappearTimer = clearInterval(this.mobDisappearTimer);
        this.mobTimer = clearInterval(this.mobTimer);
        this.countdown = clearInterval(this.countdown);
        this.resetGrid();
    }

    startTimer() {
        this.gameTime = this.timeLeft;
        this.countdown = setInterval(function () {
            this.gameTime--;
            document.getElementById('timer').textContent = this.gameTime;
            if (this.gameTime === 0) { // when Time is out, stop all functions
                this.reset();
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
        let min = 0;
        let max = this.gridSize;
        let random = Math.floor(Math.random() * (+max - +min)) + +min;
        return random;
    }

    mobGenerator() {
        let score = 0;
        let audio;
        this.mobTimer = setInterval(function () {
            let currentMob = mymobs.newMob(); // calls the creation of a random mob object in the array and stores it
            let selectDivNumber = this.randomIntegerDiv().toString(); // generate a random number and stores it as string
            let currentDiv = document.getElementById(selectDivNumber); // select the div ID corresponding to the random number
            currentDiv.innerHTML = currentMob.image; // selected Div receives the image property of the mob object
            currentDiv.onclick = function () { //when click on a Div
                if (document.getElementsByClassName('grid-item')[selectDivNumber].getElementsByTagName('img').length > 0) {
                    if (currentMob.scoreValue > 0) { // if positive Mob : display points gained in Green. Red if negative points
                        currentDiv.classList.add('goodMob')
                    } else {
                        currentDiv.classList.add('badMob');
                    }
                    currentDiv.innerHTML = currentMob.scoreValue; // show the point value of the clicked mob
                    score += currentMob.scoreValue; //update score variable
                    document.getElementById('score').innerText = score; //display score variable
                    let audio = new Audio(currentMob.audio); //play mob sound
                    audio.play(); //play mob sound
                }
            }
            this.mobDisappearTimer = setInterval(function () {
                document.getElementById(selectDivNumber).innerHTML = '';
            }.bind(this), 1500);
        }.bind(this), this.speed);
    }

    resetGrid() {
        document.getElementsByClassName('grid-container')[0].innerHTML = '';
    }

}
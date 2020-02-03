class Mob {
    constructor() {}

    newMob() {
        let mob = mobArray[this.randomIntegerMob()];
        return mob;
    }

    randomIntegerMob() {
        var min = 0;
        var max = mobArray.length;
        var random =
            Math.floor(Math.random() * (+max - +min)) + +min;
        return random;
    }
}

let mobArray = [{
        name: 'sangria',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/sangria.png">',
    },
    {
        name: 'fromage',
        scoreValue: 100,
        image: '<img width="150" height="100" src="./img/fromage.png">',
    },
    {
        name: 'lepen',
        scoreValue: -200,
        image: '<img width="150" height="100" src="./img/lepen.png">',
        audio: "./audio/sieg-heil.mp3"
    },
    {
        name: 'tortillas',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/tortilla.png">',
    },
    {
        name: 'seat',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/seat.png">',
    },
    {
        name: '2cv',
        scoreValue: 200,
        image: '<img width="150" height="100" src="./img/2cv.png">',
        audio: "./audio/honk.mp3"
    },
    {
        name: 'trump',
        scoreValue: -1000,
        image: '<img width="150" height="100" src="./img/trump.png">',
        audio: "./audio/wrong.mp3"

    },
    {
        name: 'calimocho',
        scoreValue: -100,
        image: '<img width="120" height="100" src="./img/calimocho.png">',

    },
    {
        name: 'vest',
        scoreValue: 100,
        image: '<img width="120" height="100" src="./img/vest.png">',

    },
    {
        name: 'macdo',
        scoreValue: -100,
        image: '<img width="120" height="100" src="./img/macdo.png">',

    }

]
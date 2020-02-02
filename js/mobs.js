class Mob {
    constructor() {
    }

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
        frequency: 1,
    },
    {
        name: 'fromage',
        scoreValue: 100,
        image: '<img width="150" height="100" src="./img/fromage.png">',
        frequency: 1,
    },
    {
        name: 'lepen',
        scoreValue: -200,
        image: '<img width="150" height="100" src="./img/lepen.png">',
        frequency: 1,
    },
    {
        name: 'tortillas',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/tortilla.png">',
        frequency: 1,
    },
    {
        name: 'seat',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/seat.png">',
        frequency: 1,
    },
    {
        name: '2cv',
        scoreValue: -100,
        image: '<img width="150" height="100" src="./img/2cv.png">',
        frequency: 1,
    },
    {
        name: 'trump',
        scoreValue: -1000,
        image: '<img width="150" height="100" src="./img/trump.png">',
        frequency: 1,
    },
    {
        name: 'calimocho',
        scoreValue: -1000,
        image: '<img width="120" height="100" src="./img/calimocho.png">',
        frequency: 1,
    },
    {
        name: 'vest',
        scoreValue: -1000,
        image: '<img width="120" height="100" src="./img/vest.png">',
        frequency: 1,
    }

]
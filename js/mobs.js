class Mob {
    constructor() {
        this.scoreValue = 0;
        this.visual = undefined;
        this.frequency = 1;
    }

    newMob() {
        let mob = mobArray[this.randomIntegerMob()];
        console.log('New Mob generated!')
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
        scoreValue: 1000,
        image: '<img width="100" height="100" src="/img/baguette.png">',
        frequency: 1,
    },
    {
        scoreValue: 999,
        image: '<img width="100" height="100" src="/img/fromage.png">',
        frequency: 1,
    },
    {
        scoreValue: 1,
        image: '<img width="100" height="100" src="/img/lepen.jpg">',
        frequency: 1,
    },
    {
        scoreValue: 18,
        image: '<img width="100" height="100" src="/img/baguette.png">',
        frequency: 1,
    }

]


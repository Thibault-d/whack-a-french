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
            name: 'sangria',
            scoreValue: -100,
            image: '<img width="150" height="100" src="/img/sangria.png">',
            frequency: 1,
        },
        {
            name: 'fromage',
            scoreValue: 100,
            image: '<img width="150" height="100" src="/img/fromage.png">',
            frequency: 1,
        },
        {
            name: 'lepen',
            scoreValue: -200,
            image: '<img width="150" height="100" src="/img/lepen.jpg">',
            frequency: 1,
        },
        {
            name: 'tortillas',
            scoreValue: -100,
            image: '<img width="150" height="100" src="/img/tortilla.png">',
            frequency: 1,
        },
        {
            name: 'seat',
            scoreValue: -100,
            image: '<img width="150" height="100" src="/img/seat.png">',
            frequency: 1,
        },
        {
            name: '2cv',
            scoreValue: -100,
            image: '<img width="150" height="100" src="/img/2cv.png">',
            frequency: 1,
        },
    {
        name: 'trump',
        scoreValue: -100,
        image: '<img width="150" height="100" src="/img/trump.png">',
        frequency: 1,
    }

]
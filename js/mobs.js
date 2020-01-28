class Mob {
    constructor() {
        this.scoreValue = 0;
        this.visual = undefined;
        this.frequency = 1;
    }

    newMob() {


    }
    randomInteger() {
        var min = 0;
        var max = mobArray.length;
        var random =
            Math.floor(Math.random() * (+max - +min)) + +min;
        document.write("Random Number Generated : " + random);
    }
}

let test = new Mob;
test.randomInteger();

let mobArray = [{
        scoreValue: 100,
        visual: "IMG URL",
        frequency: 1,
    },
    {
        scoreValue: 100,
        visual: "IMG URL",
        frequency: 1,
    }
]
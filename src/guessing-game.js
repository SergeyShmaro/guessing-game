class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.guessNumber = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.guessNumber = Math.ceil((this.min + this.max) / 2);
        console.log(this.guessNumber);
        return this.guessNumber;
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;

class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.answer;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.answer = Math.ceil((this.max + this.min) / 2);
        
        return this.answer
    }

    lower() {
        this.max = this.answer;
        this.guess();

    }

    greater() {
        this.min = this.answer;
        this.guess();

    }
}

module.exports = GuessingGame;

class GuessingGame {
    constructor() {
        this.min = null
        this.max = null
        this.answer = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return this.answer = Math.round((this.min + this.max) / 2) 
    }

    lower() {
        this.max = this.answer
    }

    greater() {
        this.min = this.answer
    }
}

module.exports = GuessingGame;



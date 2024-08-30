class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        // Округляем вниз для целого числа
        this.currentGuess = Math.ceil((this.min + this.max) / 2);
        return this.currentGuess;
    }

    lower() {
        // Если текущее предположение меньше, то текущее число становится максимумом
        this.max = this.currentGuess;
    }

    greater() {
        // Если текущее предположение больше, то текущее число становится минимумом
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;

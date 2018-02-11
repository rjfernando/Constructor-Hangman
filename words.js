var require = require('./letter.js');

var Word = function (word) {
    this.word = word;
    this.letters = [];
    this.found = false;

    this.getLetter = function (word) {
        for (var i = 0; i < word.length; i++) {
            this.newletter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }
};

this.findWord = function () {
    var count = 0
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].currentLetter) {
            count++
        }
    }
    if (count === this.letters.length) {
        this.found = true;
    }
    return this.found;
};

this.checkLetter = function (guessLetter) {
    var checked = 0;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].currentLetter === guessLetter) {
            this.letters[i].showLetter = true;
            checked++;
        }
    }
    return checked;
};

this.displayWord = function () {
    var wordString = "";
    for (var i = 0; i < this.letters.length; i++) {
        wordString += this.letters[i].showLetters();
    }
    return wordString;
};

module.exports = Words;
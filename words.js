var require = require('./letter.js');

//word constructor 
var Word = function (current) {
    this.word = current;
    this.letters = [];
    this.found = false;
    // for loops to get letters from word and push to an empty array
    this.getLetter = function (word) {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        }
    }
};

// if the word was found then the round is complete
this.foundWord = function () {
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
// checking to see if the letters user inputed matches the letters in the word being solved.
this.letterCheck = function (guessedLetter) {
    var checked = 0;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].currentLetter === guessedLetter) {
            this.letters[i].showLetter = true;
            checked++;
        }
    }
    return checked;
};
// renders the words
this.displayWord = function () {
    var wordString = "";
    for (var i = 0; i < this.letters.length; i++) {
        wordString += this.letters[i].showLetters();
    }
    return wordString;
};

module.exports = Word;
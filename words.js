var Letter = require('./letter.js');

function Word (word, letters) {
    this.word = word;
    this.letters = [];
}

//creates the letterArray of Letter objects from the word string
Word.prototype.createArray = function(){
	for (var i = 0; i < this.word.length; i++){
		var currentLetter = new Letter(this.word[i], false);
		if (currentLetter.letter === ' '){
			currentLetter.guessedCorrectly = true;
        }
        this.letters.push(currentLetter);
    
	}
}

//method to check if word is solved
Word.prototype.wordSolved = function () {
    var solvedCheck = true;
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].guessedCorrectly) {
            solvedCheck = false;
        }
    }
    return solvedCheck;
}

//checks to see if the letter matches any letter in the word given
Word.prototype.checkGuess = function (guessLetter) {
    var correctGuess = false;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].letter === guessLetter) {
            correctGuess = true;
            this.letters[i].guessedCorrectly = true;
        }
    }
    return correctGuess;
}

//console log the contents of the letterArray
Word.prototype.printWord = function () {
    var wordToPrint = '';
    for (var i = 0; i < this.letters.length; i++) {
        wordToPrint += this.letters[i].display().toUpperCase();
        wordToPrint += ' ';
    }
    console.log('\n    ' + wordToPrint + '\n');
}

//console log the current word 
Word.prototype.showWord = function () {
    var wordToPrint = '';
    for (var i = 0; i < this.letters.length; i++) {
        wordToPrint += this.letters[i].letter.toUpperCase();
        wordToPrint += ' ';
    }
    console.log('\n    ' + wordToPrint + '\n');
}

module.exports = Word;
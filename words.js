var Letter = require('./letter.js');

function Word (wordInput) {
    this.word = wordInput;
    this.letters = [];
}

//creates the letterArray of Letter objects from the currentWord string
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
Word.prototype.isSolved = function () {
    var solvedCheck = true;
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].guessedCorrectly) {
            solvedCheck = false;
        }
    }
    return solvedCheck;
}

//checks if a given letter is in the word
Word.prototype.checkGuess = function (guessLetter) {
    var correctGuess = false;
    for (var i = 0; i < this.letters.length; i++) {
        //if guessed letter is in word, set letter object to guessed
        if (this.letters[i].letter === guessLetter) {
            correctGuess = true;
            this.letters[i].guessedCorrectly = true;
        }
    }
    //returns boolean whether letter was in word
    return correctGuess;
}

//method to console log the contents of the letterArray
Word.prototype.printWord = function () {
    var wordToPrint = '';
    for (var i = 0; i < this.letters.length; i++) {
        wordToPrint += this.letters[i].display().toUpperCase();
        wordToPrint += ' ';
    }
    console.log('\n    ' + wordToPrint + '\n');
}

//method to console log the current word itself
Word.prototype.showWord = function () {
    var wordToPrint = '';
    for (var i = 0; i < this.letters.length; i++) {
        wordToPrint += this.letters[i].letter.toUpperCase();
        wordToPrint += ' ';
    }
    console.log('\n    ' + wordToPrint + '\n');
}

module.exports = Word;
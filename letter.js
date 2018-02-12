//constructor function with the string value that stores underlying character for the letter
// a boolean value that stores letters guessed & a function that returns characters if letter is guessed.

function Letter(letter, guessedCorrectly ) {
	this.letter = letter;
	this.guessedCorrectly = guessedCorrectly;

}
//displays either a letter or "_" when user selects
Letter.prototype.display = function() {
	if( this.guessedCorrectly ){
			return this.letter;
		} else {
			return '_';
	} 
}

module.exports = Letter;
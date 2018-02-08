//constructor function with the string value that stores underlying character for the letter
// a boolean value that stores letters guessed & a function that returns characters if letter is guessed.

function Letter(letter){
    this.currentLetter = letter;
    this.guessedLetter = false;

    this.showletter = function(){
        //puts a blank space is there is a space the the word being guessed
        if (this.currentLetter === " "){
            this.guessedLetter = true
            return " ";
        }
        //will show underline and letter
        if (this.guessedLetter === true){
            return "_";
        } else {
            return this.currentLetter;
        }
    }
};

//export file to be used in Word.js
module.exports = Letter;
//constructor function with the string value that stores underlying character for the letter
// a boolean value that stores letters guessed & a function that returns characters if letter is guessed.

function Letter(letter){
    this.currentLetter = letter;
    this.guessedLetter = false;

    this.showletter = function(){
        //puts a blank space if there is a space in the word that's being guessed
        if (this.currentLetter === " "){
            this.guessedLetter = true
            return " ";
        }
        //will show underline and letter if true
        if (this.guessedLetter === false){
            return "_";
        } else {
            return this.currentLetter;
        }
        console.log("this.currentLetter");
    }
};
 var testOne = new Letter("d");
//export file to be used in Word.js
module.exports = Letter;
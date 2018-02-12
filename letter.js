//constructor function with the string value that stores underlying character for the letter
// a boolean value that stores letters guessed & a function that returns characters if letter is guessed.

function Letter(letter){
    this.currentLetter = letter;
    this.showLetter = false;

    this.renderLetter = function(){
        //puts a blank space if there is a space in the word that's being guessed
        if (this.currentLetter === " "){
            this.showLetter = true
            return " ";
        }
        //will show underline and letter if true
        if (this.showLetter === false){
            return "_";
        } else {
            return this.currentLetter;
        }
        console.log("this.currentLetter");
    }
};
 
//export file to be used in Word.js
module.exports = Letter;
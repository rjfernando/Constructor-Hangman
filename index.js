var Word = require('./words.js');
var inquirer = require('inquirer');
var fs = require('fs');
var prompt = require('prompt');

// provides array to check user input for validation
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var wordArray = [];
var currentWord = null;
var guessedLetters = [];
var guessesRemaining = 10;

//functin to read wordfile for the array of words and place wordArray to contents of file and splits
function getWordArray() {
    fs.readFile("wordfile.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        wordArray = data.split(",");
        displayNewWord();
    });
}

function displayNewWord() {
    var randomIndex = Math.floor(Math.random() * wordArray.length);
    var wordPick = wordArray[randomIndex];
    currentWord = new Word(wordPick);
    currentWord.createArray();
    guessesRemaining = 9;
    guessedLetters = [];
    gameInPlay();
}

//make a function for game play that includes a prompt and win and lose conditions

function gameInPlay() {
    console.log('\nGuesses Remaining: ' + guessesRemaining);
    currentWord.printWord();

    // Prompt for letter guess
    inquirer.prompt([{
        type: "input",
        name: "letterGuess",
        message: "Guess a letter: "
    }]).then(function (response) {
        var currentGuess = response.letterGuess.toLowerCase();
        //checks to see if users input is a single letter
        if (alphabet.indexOf(currentGuess) === -1 || currentGuess.length !== 1) {
            console.log("\nPlease guess a single letter!")
            gameInPlay();

            return;
        }
        if (guessedLetters.indexOf(currentGuess) !== -1) {
            console.log("\nYou've already guessed that letter!")
            gameInPlay();

            return;
        }
        // push to guessedletters array
        guessedLetters.push(currentGuess);
        // check the guess using word method
        if (currentWord.checkGuess(currentGuess)) {
            console.log('\nCorrect!');
        } else {
            console.log('\nIncorrect!')
            guessesRemaining--;
        }
        // If word completed, win
        if (currentWord.isSolved()) {
            endGame(true);
        }
        // If no more guesses, lose
        else if (guessesRemaining <= 0) {
            endGame(false);
        } else {
            gameInPlay();
        }
    });
}

//function to prompt for new game
function endGame(won) {
    if (won) {
        console.log('\n*** You have won! ***')
    } else {
        console.log('\nYou have lost! The correct answer was:')
    };
    word.showWord();
    //prompts for new game
    inquirer.prompt([{
        type: "list",
        name: "newGame",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
    }]).then(function (response) {
        //if yes, picks new word
        if (response.newGame === 'Yes') {
            displayNewWord();
        } else {
            return;
        }
    });
}

function showGuessed() {
    var guessedDisplay = "";
    for (var i = 0; i < guessedLetters.length; i++) {
        guessedDisplay = guessedDisplay + guessedLetters[i].toUpperCase() + ' ';
    }
    console.log('\nAlready guessed: ' + guessedDisplay);
    gameInPlay();

    return;
}

//initializes wordlist and begins game
displayNewWord();
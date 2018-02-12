var Word = require('./words.js');
var inquirer = require('inquirer');
var fs = require('fs');
var prompt = require('prompt');

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var wordArray = [];
var currentWord = null;
var guessedLetters = [];
var guessesRemaining = 7;

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
    guessesRemaining = 7;
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
            console.log("\nPlease type a single letter!");
            gameInPlay();

            return;
        }
        if (guessedLetters.indexOf(currentGuess) !== -1) {
            console.log("=======================================");
            console.log("\nYou've already guessed that letter!");
            console.log("=======================================");
            gameInPlay();

            return;
        }
        // push to guessedletters array
        guessedLetters.push(currentGuess);
        // check the guess using word method
        if (currentWord.checkGuess(currentGuess)) {
            console.log("===========================");
            console.log('\nCorrect!');
            console.log("===========================");
        } else {
            console.log("===========================");
            console.log('\nIncorrect,  Try again!');
            console.log("===========================");
            guessesRemaining--;
        }
        // if user solves word, user wins
        if (currentWord.wordSolved()) {
            restartGame(true);
        }
        // if guessRemaining is 0 user losses
        else if (guessesRemaining <= 0) {
            restartGame(false);
        } else {
            gameInPlay();
        }
    });
}

//function to prompt for new game
function restartGame(won) {
    if (won) {
        console.log('\n**** FANTASTIC, YOU WIN! ****');
    } else {
        console.log('\nYou have lost! The correct answer was:');
    };
        currentWord.showWord();
        
        console.log("\n        TRY AGAIN NEXT TIME");
        console.log("=======================================");
    
     //prompts for new game to begin
    inquirer.prompt([{
        type: "list",
        name: "newGame",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
    }]).then(function (response) {
        
        //if use selects yes begins new game and displays a new word to guess
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
getWordArray();
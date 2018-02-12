// var inquirer = require('inquirer');
var Word = require('./words.js');
var prompt = require('prompt');

var wordArray = ['black jack', 'poker', 'texas holdem', 'baccarat', 'Casino War', 'pai gow'];

prompt.start();

hangman = {
    wordArray: wordArray,
    guessedLetters: [],
    guessesRemaining: 10,
    currentWord: null,

    startGame: function (current) {
        this.guessesRemaining();
        this.currentWord = new Word(this.wordArray[Math.floor(Math.random() * this.wordArray.length)]);
        this.currentWord.getLetter();
        console.log("Casino Card Game Hangman");
        console.log(this.currentWord.displayWord() + '\n');
        this.checkLetters();
    },

 //still working on getting the prompt to work and rendering the words 
 //
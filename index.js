var Word = require("./Word.js");
var inquirer = require("inquirer");
var clc = require('cli-color');
var figlet = require('figlet');
var isLetter = require('is-letter');
const boxen = require('boxen');

//Color for wrong guess
var incorrect = clc.red.bold;

//Color for correct guess
var correct = clc.blue.bold;

//Main game font color
var gameTextColor = clc.greenBright;

var userGuessedCorrectly = false;

var wordList = ["formidable", "heinous", "sinister", "wicked", "abominable", "loathsome", "beastly", "morbid", "spectral", "ghastly", "frightening", "dreadful", "gruesome", "terrifying", "unnerving", "petrifying", "grisly", "unearthly", "fearful", "hideous"];

var radomWord;
var someWord;

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuess = "";
var lettersAlreadyGuessedList = "";
var lettersAlreadyGuessedListArray = [];
var slotsFilledIn = 0;
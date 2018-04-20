var Word = require("./Word.js");
var inquirer = require("inquirer");
var colors = require('colors');
var picRandomWord = function () {
 
    var words = ["beautifull", "javascript","introduction","good morning","wikipedia"];
    var i = Math.floor(Math.random() * 5);
    return words[i];
}
var newWord = picRandomWord();
var numOfWord = newWord.length;
acceptLetter();
var geussCount = 9;
var sampleWord = new Word(newWord);
var initialFalseCount = numOfWord;
sampleWord.init();
function acceptLetter() {
    inquirer.prompt([{
        name: "letter",
        message: "geuss letter"
    }]).then(function (answer) {
        var trueCount = 0;
        var falseCount = 0;
        sampleWord.guessCharacters(answer.letter);
        for (i = 0; i < sampleWord.letters.length; i++) {
            if (sampleWord.letters[i].guessed === true) {
                trueCount += 1;
            }
            else {
                falseCount += 1
            }
        }
        if (trueCount === numOfWord) {
            console.log("You won !".green)
            console.log(sampleWord.checkWord().join(" "));
            playAgain();
        }
        else if ((initialFalseCount - falseCount) >= 1) {
            console.log("Correct guess".green)
            console.log(geussCount + " remaining chance")
            console.log(sampleWord.checkWord().join(" "));
            initialFalseCount -= (initialFalseCount - falseCount);
            if (geussCount !== 0) {
                acceptLetter();
            } else {
                console.log("You lose !".red)
                playAgain();
            }
        }
        else {
            geussCount -= 1;
            console.log("Incorrect guess".red)
            console.log(geussCount + " remaining chance")
            console.log(sampleWord.checkWord().join(" "));
            if (geussCount !== 0) {
                acceptLetter();
            } else {
                console.log("You lose !".red)
                playAgain();
            }
        }
    })
}
function playAgain() {
    inquirer.prompt({
        name: "again",
        type: "confirm",
        message: "Would you like to play again ?"
    }).then(function (answer) {
        if (answer.again === true) {
            newWord = picRandomWord();
            sampleWord = new Word(newWord);
            sampleWord.init();
            numOfWord = newWord.length;
            initialFalseCount = numOfWord;
            geussCount = 9;
            acceptLetter();
        } else {
            process.exit();
        }
    });
}





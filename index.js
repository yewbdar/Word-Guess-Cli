var Word = require("./Word.js");
var inquirer = require("inquirer");

GeussWord = function (randomWord) {
    this.randomWord = randomWord

}

var picRandomWord = function () {
    console.log("hi");
    var words = ["how are you", "good job", "beautifull", "javascript", "good morning"];
    var i = Math.floor(Math.random() * 5);
    return words[i];

}
var removePickedWord =function() {

}
var geussWord = new GeussWord();
var newWord = picRandomWord();
acceptLetter();
var geussCount = 9;
function acceptLetter() {
        inquirer.prompt([{
            name: "letter",
            message: "geuss letter"

        }]).then(function (answer) {
            var sampleWord = new Word(newWord);
            sampleWord.init();
            if (!sampleWord.guessCharacters(answer.letter)) {
                geussCount--;
               
                console.log("incorrect");
                console.log(geussCount + " geusses riemaing ");
                //console.log(ampleWord.guessCharacters(answer.letter));
            };
            sampleWord.checkWord();
            if (geussCount > 0) {
                acceptLetter();
                 
             }
             else if(geussCount===0){
                playAgain();
             }
            
        })
    }
    function playAgain(){
    inquirer.prompt({
        name: "again",
        type: "confirm",
        message: "Would you like to play again ?"
      }).then(function(answer) {
        if (answer.again === true) {
            newWord=picRandomWord();
            geussCount = 9;
            acceptLetter();
        } else {
          
            process.exit();
        }
      });
    
    }
  




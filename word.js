var Letter = require("./letter.js");
module.exports = function (word){
    this.letters=[],
    this.word=word,
    this.previousGuess = [],
    this.init = function() {
        this.word.split("").map(letter =>{
            var char = new Letter(letter,false);
            this.letters.push(char);
            this.previousGuess.push("_");
        });
    },
    this.checkWord = function(){
        this.letters.map((letter,index) => {
             this.previousGuess[index] = letter.isGuessed(letter.character);
        });
        return this.previousGuess;
    },
    this.guessCharacters = function (char){
        this.letters.map(letter => {
            if (!letter.guessed) {
                letter.guessCharacter(char);
            }
        });
    }
};

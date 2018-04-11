
var underScore = "_";

Letter = function (character, guessed) {
    this.character = character,
        this.guessed = guessed,

        this.isGuessed = function (char) {
            return this.guessed ? this.character : underScore;
        },
        this.guessCharacter = function (charFromWord) {
            this.guessed = this.character === charFromWord ? true : false;
            console.log(this.guessed)
        }
};
module.exports = {
    Letter: Letter
};
// var letter =new Letter("h",false);
//   letter.guessCharacter("o");  

var underScore = "_"; 
module.exports = function(character,guessed){
    this.character=character,
    this.guessed=guessed,
    this.isGuessed=function(char) {
        return  ( this.guessed === true  ?   char : underScore );
    },
    this.guessCharacter = function(char) {
        this.guessed  = (this.character === char ?  true : false);
    }
};
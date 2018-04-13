
    var underScore = "_"; 
module.exports = function(character,guessed){
    this.character=character,
    this.guessed=guessed,
    this.isGuessed=function(char)
    {
        if(this.guessed){
            return char;
            // console.log("am in here isGuessed****************")
        }else{
            return underScore;
            
        }
    },
    this.guessCharacter = function(charFromWord){
        
        if(this.character === charFromWord){
            this.guessed = true
        } else{
            this.guessed = false
        }  
        
    }
};

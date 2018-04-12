/**
 * This is a Constant that is used in letter , 
 * This is needed as we can customize placeholders as per our need. 
 */

// placeHolder = require("./PlaceHolder");
// module.exports = {    
    var underScore = "_"; 
    // dash : "-", 
// }
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
            // console.log("am in here isGuessed****************")
        }
         
        
    },
    this.guessCharacter = function(charFromWord){
        
        if(this.character === charFromWord){
            this.guessed = true
        } else{
            this.guessed = false
        }  
        // console.log(this.guessed)
    }
};
// var letter =new Letter("h",false);
//   letter.guessCharacter("o");  

var Letter = require("./Letter.js");

module.exports= function (word){
    
    this.letters=[],
    
    this.word=word,
    
    this.init = function (){
       
        for(var i=0; i<this.word.length; i++){
            
            var char = new Letter(this.word[i])
            this.letters.push(char);
        }
    }
    var concat = "";
    this.checkWord = function(){
        this.letters.map(letter => {
            concat += letter.isGuessed(letter.character)+" ";
        });
        console.log(concat);
    },
    this.guessCharacters = function (char){
        this.letters.map(letter => {
            letter.guessCharacter(char);
            
        });
        
    }
};



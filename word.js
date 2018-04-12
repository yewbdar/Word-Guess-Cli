var Letter = require("./Letter.js");
// console.log(Letter);
module.exports= function (word){
    
    this.letters=[],
    //this.letters=new Letter(),
    this.word=word,
    
    /**
     * Defining Letters depending on the underlying word
     */
    this.init = function (){
        // console.log(" am here "+this.word);
        for(var i=0; i<this.word.length; i++){
            // console.log(this.word.length);
            var char = new Letter(this.word[i])
            this.letters.push(char);
        }
            // console.log(this.letters);
    }
    /**
     * This calls the isGuessed 
     * for each letters of the underlying word
     */
    this.checkWord = function(){
        let concat = "";
        //  for(var i=0;i<this.letters.length; i++){
        //      console.log(letters[i].character);
        // //   //concat +=Letter.isGuessed(letters[i].character)
        //  }
        this.letters.map(letter => {

            // console.log(letter.character);
            concat += letter.isGuessed(letter.character)+" ";
            
        });
        //console.log("am here in check word");
        console.log(concat);
    },
    /**
     * This Guesses each characters of the Underlying word
     *  aganist the provided character.
     */
    this.guessCharacters = function (char){
        this.letters.map(letter => {
            letter.guessCharacter(char);
            // console.log("am here*****");
        });
        
    }
};

// var sampleWord = new Word("Abbee");
// sampleWord.init();
//sampleWord.checkWord();
//  = {
//     Word : Word
// };

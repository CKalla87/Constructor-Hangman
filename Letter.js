var Letter = function(char) {
    this.char = char.toUpperCase();

    this.letterGuessed = false;

    this.showCharacter = function() {
        if (this.letterGuessed) {
            console.log(this.char)
        } else {
            //console.log("_");
        }
    }
}

//var newLetter = new Letter ("b") ;
//newLetter.showCharacter();

module.exports = Letter;
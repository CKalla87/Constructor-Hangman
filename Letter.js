var Letter = function(character) {
    this.character = character.toUpperCase();

    this.letterGuessedCorrectly = false;

    this.showCharacter = function() {
        if (this.letterGuessedCorrectly) {
            console.log(this.character)
        } else {
            //console.log("_");
        }
    }
}

//Testing
// var letterTest = new Letter ("a");
// letterTest .showCharacter();

module.exports = Letter;
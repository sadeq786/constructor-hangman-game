// Dependencies: None
var Letter = function (character) {
    // A string value to store the character
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet. 
    // The default value here is false. 
    this.correctGuess = false;
}

// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly
Letter.prototype.checkCharacter = function (guessedCharacter) {
    if (guessedCharacter === this.character) {
        this.correctGuess = true;
    }
};

// A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.returnCharacter = function () {
    if (this.correctGuess === true) {
        return this.character;
    } else {
        return "_";
    }
};

module.exports = Letter;
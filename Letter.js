// Letter.js should not require any other files.
function Letter (character) {
    // A string value to store the underlying character for the letter
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet. 
    // The default value here is false. 
    this.correctGuess = false;
    // A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed
    function checkGuess () {
        if (character === word[i]) {
            this.correctGuess = true;
            return character;
        } else {
            return '_';
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly
}

module.exports = {}
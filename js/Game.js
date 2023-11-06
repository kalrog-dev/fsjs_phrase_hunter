/**
 * @file Manages the game's state, logic and interactions.
 * @author Michal Veselka
 * {@link https://github.com/kalrog-dev}
 */

/** Class representing the game. */
class Game {
  /**
   * Create an instance of game.
   * @param {Phrase[]} phrases An array of phrase objects.
   */
  constructor(phrases) {
    this.phrases = phrases;
    this.activePhrase = null;
    this.missed = 0;
  }

  startGame() {
    // Hide the start screen

    // Call getRandomPhrase

    // Set active phrase property with the chose phrase

    // Add that phrase to the board with addPhraseToDisplay 
    // on the activePhrase property
  }

  /**
   * Retrive a random phrase from the phrases array.
   * @returns {string} A random phrase.
   */
  getRandomPhrase() {
    const randIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randIndex];
  }

  handleInteraction() {

  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {
    
  }
} 

const game = new Game([
  "Phrase one",
  "Phrase two",
  "Phrase three",
  "Phrase four",
  "Phrase five",
]);
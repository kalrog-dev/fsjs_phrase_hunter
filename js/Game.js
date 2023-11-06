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

  /**
   * Hide the start overlay and display a random phrase.
   * @returns {undefined}
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
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
  new Phrase("Phrase one"),
  new Phrase("Phrase two"),
  new Phrase("Phrase three"),
  new Phrase("Phrase four"),
  new Phrase("Phrase five")
]);

game.startGame();
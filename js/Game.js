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
    game.activePhrase = game.getRandomPhrase();
    game.activePhrase.addPhraseToDisplay();
  }

  /**
   * Retrive a random phrase from the phrases array.
   * @returns {string} A random phrase.
   */
  getRandomPhrase() {
    const randIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randIndex];
  }

  /**
   * Check if the current phrase includes the selected letter and then direct the game based on that.
   * @param {object} event - The event object.
   * @returns {undefined} 
   */
  handleInteraction(event) {
    if (event.target.tagName === "BUTTON") {
      const btn = event.target;
      btn.setAttribute("disabled", "");
      const phrase = game.activePhrase.phrase;
      const selectedLetter = btn.textContent;
    
      if (phrase.includes(selectedLetter)) {
        btn.classList.add("chosen");
        game.activePhrase.showMatchedLetter(selectedLetter);
        game.checkForWin() && game.gameOver();
      } else {
        btn.classList.add("wrong");
        game.removeLife();
      }
    }
  }

  /**
   * Remove a life from the scoreboard by replacing a liveHeart.png with a lostHeart.png image.
   * @returns {undefined}
   */
  removeLife() {
    game.missed++;
    game.missed > 4 && game.gameOver();
    const hearts = document.querySelectorAll('[src*="liveHeart"]');
    hearts[hearts.length - 1].setAttribute("src", "assets/img/lostHeart.png");
  }

  /**
   * Check if all phrase letters have been revealed.
   * @returns {boolean}
   */
  checkForWin() {
    const letters = [...document.querySelectorAll("#phrase .letter")];
    return letters.every(letter => letter.classList.contains("show"));
  }

  /**
   * Display the win or loss screen overlay.
   * @returns {undefined}
   */
  gameOver() {
    const overlay = document.getElementById("overlay");
    const msg = document.getElementById("game-over-message");
    overlay.style.display = "inherit";
    overlay.className = game.missed < 5 ? "win" : "lose";
    msg.textContent = game.missed <  5 ? "You won!" : "You lost.";

  }
}
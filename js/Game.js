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
      const selectedLetter = btn.textContent;
      btn.setAttribute("disabled", "");

      if (game.activePhrase.checkLetter(selectedLetter)) {
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
    const hearts = document.querySelectorAll('[src*="live"]');
    hearts[hearts.length - 1].setAttribute("src", "assets/img/lostHeart.png");
    game.missed > 4 && game.gameOver();
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
   * Display the win or loss screen overlay and reset the game.
   * @returns {undefined}
   */
  gameOver() {
    const overlay = document.getElementById("overlay");
    const msg = document.getElementById("game-over-message");
    overlay.style.display = "inherit";
    overlay.className = game.missed < 5 ? "win" : "lose";
    msg.textContent = game.missed <  5 ? "You won!" : "You lost.";
    // Reset
    game.missed = 0;
    document.querySelectorAll("#phrase li").forEach(li => li.remove());
    document.querySelectorAll("#qwerty button").forEach(btn => {
      btn.className = "key";
      btn.removeAttribute("disabled");
    });
    document.querySelectorAll('[src*="lost"]').forEach(img => img.setAttribute("src", "assets/img/liveHeart.png"));
  }
}
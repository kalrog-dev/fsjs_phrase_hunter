/**
 * @file Handles creation of phrases.
 * @author Michal Veselka
 * {@link https://github.com/kalrog-dev}
 */

/** Class representing a phrase. */
class Phrase {
  /**
   * Create an instance of phrase.
   * @param {string} phrase - The phrase to guess.
   */
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Add letter placeholders to the display when the game starts.
   * @returns {undefined}
   */
  addPhraseToDisplay() {
    let html = `<div id="phrase" class="section"><ul>`;
    this.phrase.split("").forEach(letter => {
      if (/[a-z]/.test(letter)) {
        html += `<li class="hide letter ${letter}">${letter}</li>`;
      } else {
        html += `<li class="space"> </li>`;
      }
    });
    html += `</ul></div>`;
  }

  /**
   * Check if the selected letter matches a letter in the phrase.
   * @returns {undefined}
   */
  checkLetter() {

  }

  /**
   * Reveal the letters matching the player's selection
   * @returns {undefined}
   */
  showMatchedLetter() {

  }
}

const ph = new Phrase("Guess this thing");
ph.addPhraseToDisplay();
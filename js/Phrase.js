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
    let html = "";
    this.phrase.toUpperCase().split("").forEach(letter => {
      if (/[A-Z]/.test(letter)) {
        html += `<li class="hide letter ${letter}">${letter}</li>`;
      } else {
        html += `<li class="space"> </li>`;
      }
    });
    document.querySelector("#phrase ul").innerHTML = html;
  }

  /**
   * Check if the selected letter matches a letter in the phrase.
   * @param {string} selectedLetter - The onscreen keyboard letter selected by the user.
   * @returns {boolean}
   */
  checkLetter(selectedLetter) {
    return this.phrase.toUpperCase().includes(selectedLetter);
  }

  /**
   * Reveal the letters matching the player's selection.
   * @param {string} selectedLetter - The onscreen keyboard letter selected by the user.
   * @returns {undefined}
   */
  showMatchedLetter(selectedLetter) {
    const matchedLetters = document.querySelectorAll(`#phrase .${selectedLetter}`);
    matchedLetters.forEach(letter => {
      letter.classList.remove("hide");
      letter.classList.add("show");
    });
  }
}
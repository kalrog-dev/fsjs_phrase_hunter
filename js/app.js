/**
 * @file Adds listeners to enable user interaction and creates an instance of the game.
 * @author Michal Veselka
 * {@link https://github.com/kalrog-dev}
 */

// Create the game and phrase instances.
const game = new Game();

// Event listener for "Start Game" button clicks.
document.getElementById("btn__reset").addEventListener("click", game.startGame);

// Event listener for onscreen keyboard button clicks.
document.getElementById("qwerty").addEventListener("click", (e) =>
  e.target.tagName === "BUTTON" && game.handleInteraction(e)
);
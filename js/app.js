/**
 * @file Adds listeners to enable user interaction and creates an instance of the game.
 * @author Michal Veselka
 * {@link https://github.com/kalrog-dev}
 */

// Phrases to display and guess.
const data = [
  "Not all those who wander are lost",
  "It is never too late to be what you might have been",
  "Everything you can imagine is real",
  "There is no friend as loyal as a book",
  "Facts do not cease to exist because they are ignored"
];

// Create the game and phrases instances.
const phrases = data.map(phrase => new Phrase(phrase));
const game = new Game(phrases);

// Event listener for "Start Game" button clicks.
document.getElementById("btn__reset").addEventListener("click", game.startGame);

// Event listener for onscreen keyboard button clicks.
document.getElementById("qwerty").addEventListener("click", game.handleInteraction);
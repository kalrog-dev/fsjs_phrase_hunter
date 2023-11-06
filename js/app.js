// Phrases to display and guess.
const data = [
  "Phrase one",
  "Phrase two",
  "Phrase three",
  "Phrase four",
  "Phrase five"
];

// Create the game and phrases instances.
const phrases = data.map(phrase => new Phrase(phrase));
const game = new Game(phrases);

// Hide the start overlay and display a random phrase.
game.startGame();
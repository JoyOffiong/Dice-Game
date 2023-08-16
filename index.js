const MAX_TRIES = 3;
let currentPlayer = 1;
let playerTries = [0, 0];

// DOM elements
const RESULT = document.querySelector('#result');
const DICE1 = document.querySelector('#dice1');
const TRIES_DOM = document.querySelector('#tries');
const MAX_TRIES_DOM = document.querySelector('#maxTries');

// Set max tries to DOM
MAX_TRIES_DOM.textContent = MAX_TRIES;

// Functions
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  TRIES_DOM.textContent = playerTries[currentPlayer - 1];
  RESULT.textContent = `Player ${currentPlayer}, click "Roll Dice" to roll!`;
}

function rollDie() {
  if (playerTries[currentPlayer - 1] < MAX_TRIES) {
    const value = Math.floor(Math.random() * 6) + 1;

    // Set value to DOM
    DICE1.textContent = value;

    playerTries[currentPlayer - 1]++;

    TRIES_DOM.textContent = playerTries[currentPlayer - 1];

    if (value === 6) {
      RESULT.textContent = `Player ${currentPlayer} rolled a 6! Player ${currentPlayer} wins!`;

      // Reset player tries for the next game
      playerTries = [0, 0];
    } else if (playerTries[currentPlayer - 1] === MAX_TRIES) {
      playerTries[currentPlayer - 1] = 0
      RESULT.textContent = `Player ${currentPlayer} has used all their tries. Switching players...`;
      setTimeout(switchPlayer, 1000);
    } else {
      RESULT.textContent = `Player ${currentPlayer}, try again, you have ${MAX_TRIES - playerTries[currentPlayer - 1]} left`;
    }
  } else {
    RESULT.textContent = `Player ${currentPlayer} has used all their tries. Switching players...`;
    setTimeout(switchPlayer, 1000);
  }
}

function refresh() {
  playerTries = [0, 0];
  currentPlayer = 1;
  TRIES_DOM.textContent = playerTries[currentPlayer - 1];
  RESULT.textContent = `Player ${currentPlayer}, click "Roll Dice" to roll!`;
}

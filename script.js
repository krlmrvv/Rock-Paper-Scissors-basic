
let isPlayerSelected = false;
let humanScore = 0;
let computerScore = 0;
let gameStatus = "WaitingForPlayer";
let playerInput;
let computerInput;


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


const scoreText = document.querySelector("#score");

const computerScoreText = document.querySelector("#computer-score");

const gameStateText = document.querySelector("#status");

rockButton.addEventListener("click", () => {
  playerInput = 0;//rock
  getPCChoice();
  determineWinner();
  updateUI();
});
paperButton.addEventListener("click", () => {
  playerInput = 1;//paper
  getPCChoice();
  determineWinner()
  updateUI();
});
scissorsButton.addEventListener("click", () => {
  playerInput = 2; //scissors
  getPCChoice();
  determineWinner();
  updateUI();
});
function getPCChoice() {
  computerInput = Math.floor(Math.random() * 3); // 0, 1, or 2
}

function determineWinner() {
  if (playerInput === computerInput) {
    gameStateText.textContent = "It's a tie!";
  } else if (
    (playerInput === 0 && computerInput === 2) || // Rock beats Scissors
    (playerInput === 1 && computerInput === 0) || // Paper beats Rock
    (playerInput === 2 && computerInput === 1) // Scissors beats Paper
  ) {
    humanScore++;
    gameStateText.textContent = "You win!";
  }else if (
    (computerInput === 0 && playerInput === 2) || // Rock beats Scissors
    (computerInput === 1 && playerInput === 0) || // Paper beats Rock
    (computerInput === 2 && playerInput === 1) // Scissors beats Paper
  ) {
    computerScore++;
    gameStateText.textContent = "Computer wins!";
  }
}

function updateUI(){
  scoreText.textContent = `Score: ${humanScore}`;
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
  if (humanScore >= 5) {
    gameStateText.textContent = "You win the game!";
    resetGame();
  } else if (computerScore >= 5) {
    gameStateText.textContent = "Computer wins the game!";
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  scoreText.textContent = `Score: ${humanScore}`;
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

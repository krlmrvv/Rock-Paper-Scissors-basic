const choices = ["rock", "paper", "scissors"];


const choiceToNum = {
  rock: 0,
  paper: 1,
  scissors: 2
};

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function PlayGame(){

let humanScore = 0;
let computerScore = 0;

function PlayRound(humanChoice, computerChoice) {
  const humanNum = choiceToNum[humanChoice];
  const computerNum = choiceToNum[computerChoice];

  console.log(`Human selected ${humanChoice} and Computer selected ${computerChoice}`);
  Winner(humanNum, computerNum);
}

function Winner(human, computer) {
  console.log(`human: ${human}, computer: ${computer}`);

  if (human === computer) {
    console.log("Tie!");
  } else if ((computer + 1) % 3 === human) {
    humanScore++;
    console.log("Human won!");
  } else {
    computerScore++;
    console.log("Computer won!");
  }
}

for (let i = 0; i < 5; i++){
const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();
PlayRound(humanSelect, computerSelect)
}
    if(humanScore === computerScore){console.log("Absolute tie!")
    }else if (humanScore > computerScore) {
        console.log("You absolutely won in 5 rounds!")
    }else {console.log("You absolutely lost in 5 rounds!")}

}

PlayGame()
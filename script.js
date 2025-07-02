let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const MAX_ROUNDS = 5;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

function playRound(humanChoice) {
  if (roundCount >= MAX_ROUNDS) return;

  const computerChoice = getComputerChoice();
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  roundCount++;

  updateDisplay(resultText);

  if (roundCount === MAX_ROUNDS) {
    endGame();
  }
}

function updateDisplay(resultText) {
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultText;
}

function endGame() {
  let finalResult = "";
  if (humanScore > computerScore) {
    finalResult = "🎉 Congratulations! You won the game!";
  } else if (computerScore > humanScore) {
    finalResult = "😢 The computer won the game.";
  } else {
    finalResult = "It's a draw!";
  }

  document.getElementById("game-result").textContent = finalResult;
  document.getElementById("reset-btn").disabled = false;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;

  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = "";
  document.getElementById("game-result").textContent = "";
  document.getElementById("reset-btn").disabled = true;
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return randomChoice === 0
    ? "rock"
    : randomChoice === 1
    ? "paper"
    : "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}!`;
  }
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";

console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const roundsToPlay = 5;
  let round = 0;

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return playerSelection === computerSelection
      ? "Tie!"
      : playerSelection === "rock" && computerSelection === "scissors"
      ? (`You win, ${playerSelection} beats ${computerSelection}!`,
        playerScore++)
      : playerSelection === "paper" && computerSelection === "rock"
      ? (`You win, ${playerSelection} beats ${computerSelection}!`,
        playerScore++)
      : playerSelection === "scissors" && computerSelection === "paper"
      ? (`You win, ${playerSelection} beats ${computerSelection}!`,
        playerScore++)
      : (`You lose, ${computerSelection} beats ${playerSelection}!`,
        computerScore++);
  }

  while (round < roundsToPlay) {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock"; // value to change
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
    round++;
  }

  const gameResult =
    playerScore > computerScore
      ? "You win!"
      : playerScore < computerScore
      ? "You lose :("
      : "Draw!";

  console.log(gameResult);
}

game();

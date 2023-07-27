function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return randomChoice === 0
    ? "rock"
    : randomChoice === 1
    ? "paper"
    : "scissors";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const roundsToPlay = 5;
  let round = 0;

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

  while (round < roundsToPlay) {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock"; // value to change
    const result = playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    console.log(result);
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

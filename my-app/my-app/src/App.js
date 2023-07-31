import "./App.css";
import { useState } from "react";

function App() {
  const [playerSelection, setPlayerSelection] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerSelection, setComputerSelection] = useState();
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState();

  const choicesArray = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setPlayerSelection(value);
    randomComputerSelection();
    result();
  };

  const randomComputerSelection = () => {
    const randomSelection =
      choicesArray[Math.floor(Math.random() * choicesArray.length)];
    setComputerSelection(randomSelection);
  };

  const result = () => {
    switch (playerSelection + computerSelection) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        setGameResult("You win!");
        setPlayerScore((prevScore) => prevScore + 1);
        break;
      case "paperscissors":
      case "rockpaper":
      case "scissorsrock":
        setGameResult("You lose!");
        setComputerScore((prevScore) => prevScore + 1);
        break;
      case "paperpaper":
      case "rockrock":
      case "scissorsscissors":
        setGameResult("Tie!");
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Player selected: {playerSelection}</h1>
        <h1>Computer selected: {computerSelection} </h1>
        {choicesArray.map((choice, index) => (
          <button
            className="choices"
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <h1>
        Score: {playerScore} - {computerScore}
      </h1>
      <h1>{gameResult}</h1>
    </div>
  );
}

export default App;

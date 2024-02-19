// Your First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors !");

if (playGame) {
  // play game
  let playerChoice = prompt("Please Enter rock, paper, scissors.");
  if (playerChoice) {
    //continue
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie game !"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne} \ncomputer ${computer} \nComputer Wins!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne} \ncomputer: ${computer} \nComputer Wins!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne} \ncomputer: ${computer} \nComputer Wins!!`
          : `playerOne: ${playerOne} \ncomputer: ${computer} \nplayerOne Wins!!`;

      alert(result);

      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.")
    } else {
      alert("You didn't enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, Maybe next time.");
}

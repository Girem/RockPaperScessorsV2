function getComputersChoice() {
  let computersChoice;

  if (Math.floor(Math.random() * 3) === 0) {
    computersChoice = `rock`;
  } else if (Math.floor(Math.random() * 3) === 1) {
    computersChoice = `paper`;
  } else {
    computersChoice = `scissors`;
  }

  return computersChoice;
}

function getPlayersChoice() {
  let playersChoice = prompt(`input your choice: rock, paper, of scissors`);
  return playersChoice.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
  getComputersChoice();
  playerSelection = getPlayersChoice();
  computerSelection = getComputersChoice();

  if (playerSelection === computerSelection) {
    console.log(`you both have selected ` + playerSelection + ` it is a draw`);
    // console.log(playerSelection, computerSelection);
  } else if (playerSelection === `rock` && computerSelection === `scissors`) {
    console.log(`you win! Rock bits Scissors`);
    // console.log(playerSelection, computerSelection);
    return playersScore++;
  } else if (playerSelection === `scissors` && computerSelection === `paper`) {
    console.log(`you win! Scissors bits Paper`);
    // console.log(playerSelection, computerSelection);
    return playersScore++;
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    console.log(`you win! Paper bits Rock`);
    // console.log(playerSelection, computerSelection);
    return playersScore++;
  } else if (playerSelection === `rock` && computerSelection === `paper`) {
    console.log(`you lose! Paper bits Rock`);
    // console.log(playerSelection, computerSelection);
    return computersScore++;
  } else if (playerSelection === `scissors` && computerSelection === `rock`) {
    console.log(`you lose! Rock bits Scissors`);
    // console.log(playerSelection, computerSelection);
    return computersScore++;
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    console.log(`you lose! Rock bits Paper`);
    // console.log(playerSelection, computerSelection);
    return computersScore++;
  }
}

let playersScore = 0;
let computersScore = 0;

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
    console.log(playersScore);
    console.log(computersScore);
  }
  if (playersScore > computersScore) {
    console.log("You Win!!!");
  } else if (playersScore == computersScore) {
    console.log("It is a tie");
  } else {
    console.log("You Loose! :( ");
  }
}

game();

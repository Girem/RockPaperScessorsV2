const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissors = document.querySelector(`.scissors`);
const result = document.querySelector(`.result`);
let playersScore = document.querySelector(`.player_score`);
let computersScore = document.querySelector(`.computer_score`);

rock.addEventListener(`click`, playRound);
paper.addEventListener(`click`, playRound);
scissors.addEventListener(`click`, playRound);
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

function playRound(e) {
  getComputersChoice();

  let playerSelection = e.target.className;
  let computerSelection = getComputersChoice();

  if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === computerSelection
  ) {
    result.textContent =
      `you both have selected ` + playerSelection + ` it is a draw`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `rock` &&
    computerSelection === `scissors`
  ) {
    playersScore.textContent++;

    result.textContent = `you win! Rock bits Scissors`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `scissors` &&
    computerSelection === `paper`
  ) {
    playersScore.textContent++;

    result.textContent = `you win! Scissors bits Paper`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `paper` &&
    computerSelection === `rock`
  ) {
    playersScore.textContent++;

    result.textContent = `you win! Paper bits Rock`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `rock` &&
    computerSelection === `paper`
  ) {
    computersScore.textContent++;

    result.textContent = `you lose! Paper bits Rock`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `scissors` &&
    computerSelection === `rock`
  ) {
    computersScore.textContent++;

    result.textContent = `you lose! Rock bits Scissors`;
  } else if (
    computersScore.textContent < 5 &&
    playersScore.textContent < 5 &&
    playerSelection === `paper` &&
    computerSelection === `scissors`
  ) {
    computersScore.textContent++;

    result.textContent = `you lose! Rock bits Paper`;
  } else if (computersScore.textContent == 5) {
    result.textContent = `You loose the game!!`;
    return;
  } else if (playersScore.textContent == 5) {
    result.textContent = `Nice Job!! You win the game!!`;
    return;
  }
}

// ვათამაშებთ 5 მდე.
// მოტამაშე ==5 || კომპ == 5 >> რესულტ “მოგება„ ან „წაგებ“

//

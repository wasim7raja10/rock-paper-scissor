let computerScore = 0;
let playerScore = 0;
let initial = 0;
let randomNumber;

const startBtn = document.querySelector('.start');
const winner = document.querySelector('.winner');;
const computerWeapon = document.querySelector('.computerWeapon');
const rockBtn = document.querySelector('button[value = "rock"]');
const paperBtn = document.querySelector('button[value = "paper"]');
const scissorBtn = document.querySelector('button[value = "scissor"]');

const playRock = function () {
  playRound("rock", computerPlay())
}
const playPaper = function () {
  playRound("paper", computerPlay())
}
const playScissor = function () {
  playRound("scissor", computerPlay())
}

function exitGame() {
  document.querySelector('.input').classList.remove('exit');
  startBtn.textContent = "Let's Go";
  computerScore = 0;
  playerScore = 0;
  initial = 0;
  rockBtn.setAttribute('disabled', "");
  paperBtn.setAttribute('disabled', "");
  scissorBtn.setAttribute('disabled', "");

  rockBtn.removeEventListener('click', playRock);
  paperBtn.removeEventListener('click', playPaper);
  scissorBtn.removeEventListener('click', playScissor);
}

function computerPlay() {
  const weapon = ['rock', 'paper', 'scissor'];
  const randomNumber = (Math.random() * 3);
  const index = Math.floor(randomNumber);
  return weapon[index];
}

function updateScore() {
  document.querySelector('.pScore').textContent = playerScore;
  document.querySelector('.cScore').textContent = computerScore;
}

function announceWinner() {
  if (computerScore == playerScore) {
    winner.textContent = "TIE";
  } else if (computerScore > playerScore) {
    winner.textContent = "COMPUTER won";
  } else {
    winner.textContent = "PLAYER won";
  }
}

function playRound(playerSelection, computerSelection) {
  computerWeapon.textContent = computerSelection;
  if (playerSelection == computerSelection) {} else if (
    playerSelection == "rock" && computerSelection == "scissor" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissor" && computerSelection == "paper"
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  updateScore();

  initial++;
  if (initial == roundNumber) {
    announceWinner();
    exitGame();
  }
}

function changeLayout() {
  document.querySelector('.input').classList.add('exit');
  startBtn.textContent = "Exit";
}

function startGame() {
  const roundSelection = document.querySelector('#round');
  roundNumber = roundSelection.value;
  rockBtn.removeAttribute("disabled");
  paperBtn.removeAttribute("disabled");
  scissorBtn.removeAttribute("disabled");
  changeLayout();

  rockBtn.addEventListener('click', playRock, false);
  paperBtn.addEventListener('click', playPaper, false);
  scissorBtn.addEventListener('click', playScissor, false);
}

// start game
startBtn.addEventListener('click', startGame);
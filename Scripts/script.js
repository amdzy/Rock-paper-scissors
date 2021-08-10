const btn = document.querySelector('.wrapper');
const value = document.querySelector('.game');
const yourScore = document.querySelector('.player-score');
const pcScore = document.querySelector('.pc-score');
const resultScreen = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let pScore = document.createElement('span')
let cScore = document.createElement('span')
let result = document.createElement('span')
resultScreen.appendChild(result)
yourScore.appendChild(pScore)
pcScore.appendChild(cScore)
cScore.textContent = computerScore;
pScore.textContent = playerScore;

resetBtn.addEventListener('click', () => location.reload());

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') &&
        (computerScore <= 5 || playerScore <= 5)) {
        playerScore += 1
        return 'You win'
        
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') &&
        (computerScore <= 5 || playerScore <= 5)) {
        computerScore += 1
        return 'You lose'

    } else {
        return "It's a tie"

    }
}
let playerSelect = value.addEventListener('click', function (e) {
    const isButton = event.target.nodeName === 'IMG';
    if (!isButton) {
        return;
    }
    playerSelection = e.target.alt
})

btn.addEventListener('click', game);

function game() {
    if (playerScore != 5 && computerScore != 5) {
        let computerSelection = computerPlay();
        result.textContent= playRound(playerSelection, computerSelection) 
        
    } else {
        alert('Game is over press play again to restart')
    }
    cScore.textContent = computerScore;
    pScore.textContent = playerScore; 
}





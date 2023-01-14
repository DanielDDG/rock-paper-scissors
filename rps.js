let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function playRound() {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();
    let result = 'Default.';

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        output = 'You lose! Paper beats Rock.';
        result = 'Loss.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        output = 'You win! Rock beats Scissors.';
        result = 'Win.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        output = 'A draw! Rock draws with Rock.';
        result = 'Draw.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        output = 'You lose! Scissors beats Paper.';
        result = 'Loss.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        output = 'You win! Paper beats Rock.';
        result = 'Win.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        output = 'A draw! Paper draws with Paper.';
        result = 'Draw.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        output = 'A draw! Scissors draws with Scissors.';
        result = 'Draw.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        output = 'You win! Scissors beats Paper.';
        result = 'Win.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        output = 'You lose! Rock beats Scissors.';
        result = 'Loss.';
    }

return result;

}

// This is being removed for a second.
        
function game() {
    let roundResult = playRound();

          if (roundResult === 'Win.') {
            playerScore++;
            rounds++;
            score.textContent = 'You won! The score is now ' + playerScore + '-' + computerScore + '.';
          } else if (roundResult === 'Loss.') {
            computerScore++;
            rounds++;
            score.textContent = 'You lost! The score is now ' + playerScore + '-' + computerScore + '.';                
          } else {
            rounds++;
            score.textContent = 'Draw! The score stays as ' + playerScore + '-' + computerScore + '.';
          }

          if (rounds === 5) {
            rock.removeEventListener('click', rockRound);
            paper.removeEventListener('click', paperRound);
            scissors.removeEventListener('click', scissorsRound);
          } 
          
          if (rounds === 5 && playerScore > computerScore) {
            output = 'Congrats! You are the ultimate winner.'
            return output;
          } else if (rounds === 5 && playerScore < computerScore) {             
            output = 'You lose! You are the ultimate loser.'
            return output;
          } else if (rounds === 5 && playerScore === computerScore) {
            output = "It's an ultimate draw!";
            return output;
          }
}

// This is a test. Is the working tree clean?

function rockRound() {

    playerSelection = 'rock';
    result.textContent = game();

}

function paperRound() {

    playerSelection = 'paper';
    result.textContent = game();

}

function scissorsRound() {

    playerSelection = 'scissors';
    result.textContent = game();

}


const buttons = document.querySelectorAll('buttons');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let score = document.querySelector('.score');
let result = document.querySelector('.result');
rock.addEventListener('click', rockRound);
paper.addEventListener('click', paperRound);
scissors.addEventListener('click', scissorsRound);

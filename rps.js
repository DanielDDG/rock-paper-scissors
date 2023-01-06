    /* Pseudocode:
    Make an array that holds Rock, Paper, and Scissors.
    Create function which takes two parameters.
    Prompt the user to choose Rock, Paper or Scissors.
    Call getComputerChoice function to have a computerSelection.

    */

    function getComputerChoice() {
        const choice = ['Rock', 'Paper', 'Scissors'];
        const randomChoice = choice[Math.floor(Math.random() * choice.length)];
        return randomChoice;
    }

    function playRound() {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors.");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        let result = 'Default.';

        if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            console.log('You lose! Paper beats Rock.')
            result = 'Loss.'
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            console.log('You win! Rock beats Scissors.')
            result = 'Win.'
        } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
            console.log('A draw! Rock draws with Rock.')
            result = 'Draw.'
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            console.log('You lose! Scissors beats Paper.')
            result = 'Loss.'
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            console.log('You win! Paper beats Rock.')
            result = 'Win.'
        } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
            console.log('A draw! Paper draws with Paper.')
            result = 'Draw.'
        } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
            console.log('A draw! Scissors draws with Scissors.')
            result = 'Draw.'
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            console.log('You win! Scissors beats Paper.')
            result = 'Win.'
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            console.log('You lose! Rock beats Scissors.')
            result = 'Loss.'
        }

        return result;

    }
        
    function game() {
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            let roundResult = playRound();

            if (roundResult === 'Win.') {
                playerScore++;
                console.log('The score is ' + playerScore + '-' + computerScore);
            } else if (roundResult === 'Loss.') {
                computerScore++;
                console.log('The score is ' + playerScore + '-' + computerScore);                
            } else {
                console.log('The score is ' + playerScore + '-' + computerScore);
            }
        }

        if (playerScore > computerScore) {
            console.log('Congrats! You are the ultimate winner.')
        } else if (playerScore < computerScore) {                
            console.log('You lose! You are the ultimate loser.')
        } else {
            console.log("It's an ultimate draw!");
        }

    }
        
        game();
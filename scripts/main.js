let playerScore = 0;
let computerScore = 0;


function disableButtons () {
    buttons.forEach(disable => {
        disable.disabled = true
    });
}


// Game logic
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }
    document.getElementById('results').innerHTML = result
    return
}

// Computer randomize
function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
        return "Rock";
    } else if (guess === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

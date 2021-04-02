
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    /* Rock */
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return ("You Tied! Rock can't beat a Rock");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        ++playerScore
        return ("You Win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        ++computerScore
        return ("You Lose! Paper beats Rock");
    }
    /* Paper */
    if (playerSelection == "paper" && computerSelection == "Paper") {
        return ("You Tied! Paper can't beat Paper");
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        ++computerScore
        return ("You Lose! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        ++playerScore
        return ("You Win! Paper beats the Rock");
    }
    /* Scissors */
    if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return ("You Tied! Scissors can't beat Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        ++playerScore
        return ("You Win! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        ++computerScore
        return ("You Lose! Rock beats Scissors") ;
    /* Not a valid option */
    } else {
        return ("You didn't choose a valid option, please hit F5 and try again")
    }
}


function computerPlay() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
        return ("Rock");
    } else if (guess === 1) {
        return ("Paper");
    } else {
        return ("Scissors");
    }
}

function game() {
    for (let i=0;i<5;i++) {
        let playerSelection = prompt("Choose your weapon (rock, paper or scissors): ").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection)); 
    }
    if (computerScore < playerScore) {
        console.log (`You win! Your score: ${playerScore} Computer score: ${computerScore}. Congratulations!`)
    } else if (computerScore === playerScore) {
        console.log (`It's a tie! Your score: ${playerScore} Comptuer score: ${computerScore}. Try again!`)
    } else {
        console.log (`You lose! Your score: ${playerScore} Comptuer score: ${computerScore}. Try again!`)
    }
}
game();
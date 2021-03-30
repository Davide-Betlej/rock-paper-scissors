

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return ("You Tied! Rock can't beat a Rock");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return ("You Win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return ("You Lose! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return ("You Tied! Paper can't beat Paper");
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return ("You Lose! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return ("You Win! Paper beats the Rock");
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return ("You Tied! Scissors can't beat Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return ("You Win! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return ("You Lose! Rock beats Scissors");
    } else {
        return ("You didn't choose a valid option, please hit F5 and try again")
    }
}

const input = prompt("Choose your weapon (rock, paper or scissors): ");
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); 
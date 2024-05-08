function getComputerChoice(){
    let PCchoice = Math.floor(Math.random()*3);
    if (PCchoice == 0) {
        PCchoice = "rock"
    } else if (PCchoice == 1) {
        PCchoice = "paper"
    } else {
        PCchoice = "scissors"
    }
    alert(`Computer choosed ${PCchoice}`);
} 

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?")
    if (humanChoice.toLocaleLowerCase() !== 'rock' && humanChoice.toLocaleLowerCase() !== 'paper' && humanChoice.toLocaleLowerCase() !== 'scissors') {
        return alert("Invalid answer");
    } else {
        humanChoice.toLocaleLowerCase;
        alert(`you choosed ${humanChoice}!`);
        return humanChoice;
    }
}


let humanScore = 0;
let computerScore = 0;

function showScore(humanScore, computerScore) {
    alert(`Human score: ${humanScore} Computer score: ${computerScore}`)
}

function playRound(humanChoice, PCchoice) {
    //Human choosed rock
    if (humanChoice === 'rock') {
        if (PCchoice === 'rock') {
            alert("It's a tie!");
        } else if (PCchoice === 'scissors') {
            humanScore++;
            return alert("Human wins! Rock beats scissors.");
        } else if (PCchoice === 'paper') {
            computerScore++;
            return alert("computer wins! paper beats rock.");
        }
    }
    showScore(humanScore, computerScore)
}





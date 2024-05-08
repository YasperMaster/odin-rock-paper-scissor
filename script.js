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
    return PCchoice;
} 

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?").toLocaleLowerCase()
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        return alert("Invalid answer");
    } else {
        humanChoice.toLocaleLowerCase;
        alert(`you choosed ${humanChoice}!`);
        return humanChoice;
    }
}


let humanScore = 0;
let computerScore = 0;

function showScore(humScore, compScore) {
    alert(`Human score: ${humScore} Computer score: ${compScore}`)
}


function playRound(humChoice, compChoice) {
    //Human choosed rock
    if (humChoice === "rock") {
        if (compChoice === "rock") {
            computerScore++;
            humanScore++;
            return alert("It's a tie!");
        }
        else if (compChoice === "paper") {
            computerScore++;
            return alert("Computer win! Paper beats rock.");
        }
       else {
            humanScore++;
            return alert("Human win! Rock beats scissors.")
        }
    }
    //human choosed paper
    if (humChoice === "paper") {
        if (compChoice === "paper") {
            computerScore++;
            humanScore++;
            return alert("It's a tie!");
        }
        else if (compChoice === "scissors") {
            computerScore++;
            return alert("Computer win! scissors beats paper.");
        }
       else {
            humanScore++;
            return alert("Human win! paper beats rock.")
        }
    }
    //human choosed scissors
    if (humChoice === "scissors") {
        if (compChoice === "scissors") {
            computerScore++;
            humanScore++;
            return alert("It's a tie!");
        }
        else if (compChoice === "rock") {
            computerScore++;
            return alert("Computer win! rock beats scissors.");
        }
       else {
            humanScore++;
            return alert("Human win! scissors beats paper.")
        }
    }
}


function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    return showScore(humanScore, computerScore);
}

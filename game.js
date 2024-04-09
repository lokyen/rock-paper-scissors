function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){ //tied
        calculateScore(1, 1);
        return `Tied! Both players chose ${computerSelection}`;
    }else if(playerSelection == 'rock'){ // rock
        if(computerSelection == 'scissors'){
            calculateScore(1, 0);
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }else{
            calculateScore(0, 1);
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }else if(playerSelection == 'paper'){ // paper
        if(computerSelection == 'rock'){
            calculateScore(1, 0);
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }else{
            calculateScore(0, 1);
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }else{
        if(computerSelection == 'rock'){ // scissors
            calculateScore(1, 0);
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }else{
            calculateScore(0, 1);
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

function playGame(){
    let rounds = 0;
    while(rounds != 5){
        console.log(`Round ${rounds + 1}`);
        let playerSelection = prompt("Rock, Paper, Scissors? ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        rounds++;
    }
}

function calculateScore(myPoint, computerPoint){
    myScore += myPoint;
    computerScore += computerPoint;
}

function calculateWinner(myScore, computerScore){
    if(myScore == computerScore){
        return `It's a tie`
    }
    else if(myScore > computerScore){
        return `You are the Winner!`
    }else{
        return `You are the Loser!`
    }
}

console.log("Rock, Paper, Shoot for 5 Rounds\n");
let myScore = 0;
let computerScore = 0;
playGame();
console.log(`My Score is ${myScore}`);
console.log(`The Computer's Score is ${computerScore}`);
console.log(calculateWinner());




let playerWins = 0;
let computerWins = 0;
let round = 1;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choice = "";
    let validChoices = ["rock", "paper", "scissors"];

    while (!validChoices.includes(choice)) {
        choice = prompt(`Round ${round}: Enter rock, paper, or scissors: `).toLowerCase();
    }

    return choice;
}

function getWinner(playerChoice, computerChoice) {
    if ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
            return 1;
    } else if((computerChoice == "rock" && playerChoice == "scissors") ||
            (computerChoice == "paper" && playerChoice == "rock") ||
            (computerChoice == "scissors" && playerChoice == "paper")) {
                return 2;
    } else {
        return 0;
    }
}

function playRound(playerChoice, computerChoice) {
    let winner = getWinner(playerChoice, computerChoice);
    round++;
    switch (winner) {
        case 0: return "Tie";
        case 1: {
            playerWins++;
            return `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
        }
        case 2: {
            computerWins++;
            return `You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`;
        }
    }
}

function capitalize(word) {
    let firstLetter = word.substring(0,1);
    let restOfWord = word.substring(1);
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log(
            `Player: ${playerWins} \nComputer: ${computerWins}`);
    
    if (playerWins > computerWins) console.log("You won!");
    else if (computerWins > playerWins) console.log("You lost!");
    else console.log("Tied game");
}

game();
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choice = "";
    let validChoices = ["rock", "paper", "scissors"];

    while (!validChoices.includes(choice)) {
        choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    }
}


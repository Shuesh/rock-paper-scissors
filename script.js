
function computerPlay(){
    //Will return a value 0 < x < 3 that is rounded down.
    let rps = Math.floor(Math.random() * 3);

    let computerSelection;

    switch (rps){
        case 0:
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
    }

    return computerSelection;
}


function play(playerSelection, computerSelection){
    while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
        playerSelection = prompt("Invalid input, please choose \"rock\", \"paper\", or \"scissors\"");

    }

    switch (playerSelection.toLowerCase()){
        case "rock":
            if (computerSelection == "Rock"){
                return "It's a tie this round!\nYou:Rock Computer:Rock"
            } else if (computerSelection == "Paper") {
                return "You lose this round! Paper beats Rock.\nYou:Rock Computer:Paper"
            } else {
                return "You win this round! Rock beats Scissors.\nYou:Rock Computer:Scissors"
            }
        case "paper":
            if (computerSelection == "Rock"){
                return "You win this round! Paper beats Rock.\nYou:Paper Computer:Rock"
            } else if (computerSelection == "Paper") {
                return "It's a tie this round!\nYou:Paper Computer:Paper"
            } else {
                return "You lose this round! Scissors beats Paper.\nYou:Paper Computer:Scissors"
            }
        case "scissors":
            if (computerSelection == "Rock"){
                return "You lose this round! Rock beats Scissors.\nYou:Scissors Computer:Rock"
            } else if (computerSelection == "Paper") {
                return "You win this round! Scissors beats Paper.\nYou:Scissors Computer:Paper"
            } else {
                return "It's a tie this round!\nYou:Scissors Computer:Scissors"
            }
        default:
            return "Uh oh! Something went wrong."
    }
}


function game(){
    //Player, Computer
    let score = [0, 0];

    for (let i = 0; i < 5; i++){
        result = play(prompt("Make your selection."), computerPlay());
        if (result.includes("win")) {
            score[0]++;
        } else if (result.includes("lose")){
            score[1]++;
        } else {
            console.log(result);
            while (result.includes("tie")){
                result = play(prompt("We can't have any ties! Try again."), computerPlay());
            }
            result.includes("win") ? score[0]++ : score[1]++;
        }
        console.log(result);
    }

    if (score[0] > score[1]){
        console.log(`You won! The overall score was ${score[0]} to ${score[1]}`);
    }
    else {
        console.log(`You lost this one. The overall score was ${score[0]} to ${score[1]}`);
    }
}

game();
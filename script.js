
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


function play(e){
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    let winner = "null";

    switch (playerSelection.toLowerCase()){
        case "rock":
            if (computerSelection == "Rock"){
                winner = "tie";
                break;
            } else if (computerSelection == "Paper") {
                winner = "computer";
                break;
            } else {
                winner = "player";
                break;
            }
        case "paper":
            if (computerSelection == "Rock"){
                winner = "player";
                break;
            } else if (computerSelection == "Paper") {
                winner = "tie";
                break;
            } else {
                winner = "computer";
                break;
            }
        case "scissors":
            if (computerSelection == "Rock"){
                winner = "computer";
                break;
            } else if (computerSelection == "Paper") {
                winner = "player";
                break;
            } else {
                winner = "tie";
                break;
            }
    }

    updateScore(winner, playerSelection, computerSelection);
}


function updateScore(winner, playerSelection, computerSelection){
    let score = document.querySelector('#score').innerText;
    let result = document.querySelector('#results');
    let playerScore = +score[0];
    let computerScore = +score[4];

    if (playerScore >= 5 || computerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        document.body.removeChild(winnerText)
    }

    if (winner == "player"){
        playerScore++;
    }
    else if (winner == "computer"){
        computerScore++;
    }    
    
    document.querySelector('#score').innerText = `${playerScore} - ${computerScore}`;
    result.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}`;

    if (playerScore == 5) {
        winnerText = document.createElement("p");
        winnerText.innerText = "Player wins!"
        document.body.appendChild(winnerText);
    }
    else if (computerScore == 5){
        winnerText = document.createElement("p");
        winnerText.innerText = "Computer wins!";
        document.body.appendChild(winnerText);
    }
}


const selections = document.querySelectorAll('#selections');
selections.forEach(option => option.addEventListener('click', play));


//game();
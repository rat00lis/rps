function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection != 'ROCK' && playerSelection != 'SCISSORS' && playerSelection != 'PAPER'){
        return 'Error: choose a legal weapon';
    }
    if(playerSelection == 'ROCK'){
        if (computerSelection == 'Rock'){
            return 'Draw!'
        }
        if (computerSelection == 'Paper'){
            return 'You lose! paper beats rock.'
        }
        return 'You win! rock beats scissors.'
    }
    if(playerSelection == 'PAPER'){
        if (computerSelection == 'Paper'){
            return 'Draw!'
        }
        if (computerSelection == 'Scissors'){
            return 'You lose! scissors beats paper.'
        }
        return 'You win! paper beats rock.'
    }
    if(playerSelection == 'SCISSORS'){
        if (computerSelection == 'Scissors'){
            return 'Draw!'
        }
        if (computerSelection == 'Rock'){
            return 'You lose! rock beats scissors.'
        }
        return 'You win! scissors beats paper.'
    }
}

function playGame(){
    let playerSelection = prompt("Pick your weapon (Paper, Rock, Scissors)");
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    playerSelection = playerSelection.toUpperCase();
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    playGame();
}
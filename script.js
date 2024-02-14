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

let options = document.querySelectorAll('.option');
let result = document.querySelector('.result');
let score = document.querySelector('#score');
let scorePC = document.querySelector('#scorePC');
let playerScore = 0;
let computerScore = 0;
options.forEach((option) => {
    option.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let playerSelection = option.getAttribute('id');
        console.log(playerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        result.textContent = roundResult;
        if(roundResult.includes('win')){
            playerScore++;
        }else if(roundResult.includes('lose')){
            computerScore++;
        }
        score.textContent = playerScore;
        scorePC.textContent = computerScore;
        let resultImage = document.createElement('img');
        if (roundResult.includes('rock') && roundResult.includes('paper')){
            resultImage.src = './img/paper beats rock.png';
        }else if (roundResult.includes('rock') && roundResult.includes('scissors')){
            resultImage.src = './img/rock beats scissors.png';
        }
        else if (roundResult.includes('paper') && roundResult.includes('scissors')){
            resultImage.src = './img/scissors beats paper.png';
        }
        else{
            resultImage.src = './img/draw.png';
        }
        result.appendChild(resultImage);
        if(playerScore == 5){
            result.textContent = 'You win!';
            playerScore = 0;
            computerScore = 0;
            score.textContent = playerScore;
            scorePC.textContent = computerScore;
            resultImage.src = './img/win.png';
        }
        if(computerScore == 5){
            result.textContent = 'You lose!';
            playerScore = 0;
            computerScore = 0;
            score.textContent = playerScore;
            scorePC.textContent = computerScore;
            resultImage.src = './img/lose.png';
        }
        result.appendChild(resultImage);
        let computerOption = document.querySelector('#computerOption');
        computerOption.textContent = computerSelection;
    })
});
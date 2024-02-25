const roundIndicator = document.getElementById('round-indicator');
const gameOptions = ['rock', 'paper', 'scissors'];
let roundResult = '';
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let computerSelection = ''; // Store computer's choice for the current round

const getComputerChoice = () => {
    let getRandomNum = Math.floor(Math.random() * 3);
    return gameOptions[getRandomNum];
}

const playRound = (player, computer) => {
    if (player === computer) {
        console.log(`You: ${player}`);
        console.log(`Computer: ${computer}`);
        console.log("It's draw");
        roundResult = "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log(`You: ${player}`);
        console.log(`Computer: ${computer}`);
        console.log("You won the round");
        roundResult = 'win';
        playerScore++;
    } else {
        console.log(`You: ${player}`);
        console.log(`Computer: ${computer}`);
        console.log("You lost the round");
        roundResult = 'lose';
        computerScore++;
    }
}

const updateUI = () => {
    let playerSelection = getValue();
    roundCount++;
    roundIndicator.innerHTML = `Round: ${roundCount}`;
    document.getElementById("computer-choice").innerHTML = computerSelection.toUpperCase();
    document.getElementById("player-choice").innerHTML = playerSelection.toUpperCase();
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function getValue() {
    const selectElement = document.getElementById("mySelect");
    return selectElement.value;
}

const playGame = () => {
    if (roundCount < 5) {
        computerSelection = getComputerChoice(); // Store the computer's choice for the current round
        let playerSelection = getValue();
        playRound(playerSelection.toLowerCase(), computerSelection);
        updateUI();

        if (roundCount === 5) {
            // End of the game, check the winner
            if (playerScore > computerScore) {
                console.log("You Won the Game!");
            } else if (playerScore < computerScore) {
                console.log("You Lost the Game!");
            } else {
                console.log("It's a Draw!");
            }
        }
    }
}

const fightButton = document.getElementById('fight');
fightButton.addEventListener('click', playGame);

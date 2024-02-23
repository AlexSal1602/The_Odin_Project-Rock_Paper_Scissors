const gameOptions = ['rock', 'paper', 'scissors'];


const getComputerChoice = () =>{
    let getRandomNum = Math.floor(Math.random() * (2 + 1));
    let computerChoice = gameOptions[getRandomNum];
    return computerChoice
}

let roundResult = ''
let playerScore = 0;
let computerScore = 0;

const playRound = (player, computer) =>{
    if(player === computer){
        console.log(`You: ${player}`)
        console.log(`Computer: ${computer}`)
        console.log("It's draw")
        roundResult = "draw"
    }else if(player === "rock" && computer === "scissors" || player === "paper" && computer === "rock"
    || player === "scissors" && computer === "paper"){
        console.log(`You: ${player}`)
        console.log(`Computer: ${computer}`)
        console.log("You won the round")
        roundResult = 'win'
        playerScore++
    }else{
        console.log(`You: ${player}`)
        console.log(`Computer: ${computer}`)
        console.log("You lost the round")
        roundResult = 'lose'
        computerScore++
    }
}


const playGame = ()=> {
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Make Your Selection: Rock, Paper, Scissors")
        playRound(playerSelection.toLowerCase(), computerSelection)
    }
    if(playerScore > computerScore){
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        console.log("You Won the Game!")
    }else if(playerScore < computerScore){
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        console.log("You Lost the Game!")
    }else(
        console.log("It's a Draw!")
    )
}

playGame()

/* Objetivo: Crear un juego de piedra, papel o tijeras. Pseudocodigo:
Crear una funcion llamada getComputerChoice que de la opcion de la maquina. 

 */

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    } else {
        console.log("function now working");
    }
}

// Ahora, la logica para la opcion del usuario

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper"
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        console.log("function now working");
    }
}
// single round
// la logica detras de una ronda me tiene pensante y eso que es facil xd, quizas es solo paralisis por analisis. La cosa es que, si el usuario saca una mano favorable, entonces usuario gana, si computerChoice saca una mano favorable entonces gana, como hago eso?. creo que no hay forma "simple" o limpia, sera con muchos if else. No buscare en google, pq quiero hacerlo yo.
//
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        return "Human wins";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        return "Human wins";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "Human wins";
    } if(computerChoice === "rock" && humanChoice === "scissors"){
        return "Computer wins";
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        return "Computer wins";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        return "Computer wins";
    } else if (computerChoice === humanChoice) {
        return "DRAW";
    } else {
        console.log("bad use");
    }
}

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let totalPartys = 0;
function playGame(){
    for(let r = 1; r <= 5; r++){
        let roundwinner = playRound(getHumanChoice(), getComputerChoice());        
        if(roundwinner === "Human wins"){
            humanScore++
            totalPartys++;
            console.log("Human wins");
        } else if (roundwinner === "Computer wins"){
            computerScore++;
            totalPartys++;
            console.log("Computer wins");
        } else if (roundwinner === "DRAW"){
            console.log("DRAW");
            totalPartys++;
        } else {
            console.log("Maybe this is not working");
        }
    }
    if(humanScore === computerScore){
        console.log("the party has ended on DRAW! " + "Human:" + humanScore + " and computer:" + computerScore + " On a total of:" + totalPartys + " Partys! and:" + drawScore + " draws!");
    } else if(humanScore < computerScore) {
        console.log("The Computer WIN " + computerScore + "/" + totalPartys);
    } else if(humanScore > computerScore) {
        console.log("The Human WINS " + humanScore + "/" + totalPartys);
    }
}



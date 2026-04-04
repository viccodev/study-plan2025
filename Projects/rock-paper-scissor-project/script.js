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
        return console.log("Human Wins");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        return console.log("Human Wins");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return console.log("Human wins");
    } if(computerChoice === "rock" && humanChoice === "scissors"){
        return console.log("Computer Wins");
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        return console.log("Computer Wins");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        return console.log("Computer wins");
    } else if (computerChoice === humanChoice) {
        return console.log("DRAW");
    } else {
        console.log("bad use");
    }
}

function playGame(){
    for(let r = 1; r <= 5; r++){
        playRound(getHumanChoice(), getComputerChoice());        
    }
}
let humanScore = 0;
let computerScore = 0;



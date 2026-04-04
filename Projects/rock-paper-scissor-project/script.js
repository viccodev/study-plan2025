/* Objetivo: Crear un juego de piedra, papel o tijeras. Pseudocodigo:
Crear una funcion llamada getComputerChoice que de la opcion de la maquina. 

 */

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return console.log("Rock");
    } else if (computerChoice === 2) {
        return console.log("Paper");
    } else if (computerChoice === 3) {
        return console.log("Scissors");
    } else {
        console.log("function now working");
    }
}

// Ahora, la logica para la opcion del usuario

function getHumanChoice(Choice) {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return console.log("Rock");
    } else if (humanChoice === "paper") {
        return console.log("Paper");
    } else if (humanChoice === "scissors") {
        return console.log("Scissors");
    } else {
        console.log("function now working");
    }
}


function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}

let messagecons = "alerta pro";
alert(messagecons);


let num1 = 5;
let num2 = 10;
let num3 = 25;
let num4 = -10;

let op1 = num1 + num2;
let op2 = num3 - num4;

let finalResult = op1 * op2;

let numero = prompt("ingresa un numero y te dire si es mayor o igual que 10");
if (numero == 10){
	alert("Este numero es igual a 10!");
} else if (numero > 10) {
	alert("Este numero es mayor que diez!");
} else if (numero < 10) {
	alert("Este numero es menor que diez!");
} else {
	alert("lo que ingresaste podria no ser un numero");
}


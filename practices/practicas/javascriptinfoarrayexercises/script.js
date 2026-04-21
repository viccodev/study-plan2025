/* Write the function camelize(str) that
 changes dash-separated words like
  “my-short-string” into camel-cased
  “myShortString”.*/

// my short string

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50, 70, 80, 5, 10, 90, 100, -15, -25, -50, -70, -1, -2, -3, -4, -5, -6];
let shortArray = [1, 2, 3, 4, 5];
function camelize(str){
  let capitalized = str.split("-")
  .map((item, index)=> index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1));
    return capitalized.join("");
}
// Filter range function
function filterRange(arr, a, b){
  return arr.filter(item => item >= a && item <= b);
}


//

function filterRangeInPlace(arr, a, b){
  for(i = 0; i < arr.length; i++){
    let val = arr[i];
    if(val < a || val > b){
      arr.splice(i, 1);
      i--;
    } 
  }
}

// decreasing order modificating array

function decreasingOrder(array) {
  array.sort((a, b) => a - b)
}

// decreasing order copy of array without modify the original array.

function decreasingordernomodify(array){
  return array.slice().sort((a, b) => a - b);
}



/* Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:
with equal probability of each case. */

function randomOrder(array){
  for (let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];

  }
  return array;
}

/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:
// Filtrar palabras repetidas
// comparar con los otros items
// eliminar repetidos y el original
// continuar el loop
// array final con unicos.
function unique(arr) {
  /* your code */


let strings = ["Hare", "Krishna", ":-O", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", "pingu"
];

// funcion que devuelve solo los que no estan repetidos:
function uniqueItems(array){
  let filtrado = [];
  for (let i = array.length - 1; i >= 0; i-- ){
    let val = array.filter(item => item === array[i]).length;
    if (val === 1) {
      filtrado.unshift(array[i]);
      
    } else {
      console.log("valor duplicado encontrado")
    }
  }
  return filtrado;
}

//Funcion que devuelve solo 1 valor de cada uno.

function Only1valuePerArray(array){
  let filtrado = [];
  for (let i = 0; i < array.length; i++) {
    if (!filtrado.includes(array[i])){
      filtrado.push(array[i]);
    } else {
      console.log("filtering this item");
    }
  }
  return filtrado;

}
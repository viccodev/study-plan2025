function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
// Do this using map, filter and reduce

let arraycito = [1, 2, 3, 4, 5];
function sumtripled(array){

function evennumber(n){
    return n % 2 === 0;
}

let evens = array.filter(evennumber);
let tripler = n => n * 3;
let tripledEvenNumbers = evens.map(tripler);
let totalSum = tripledEvenNumbers.reduce((total, actualItem) => total + actualItem, 0)
return totalSum;
}

// concatenated ME

function tripledEvenC(array){
  return array.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((total, item) => total + item);
}

// TOP

function sumOfTripledEvens2(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

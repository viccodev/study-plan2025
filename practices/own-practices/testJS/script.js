// Sumar 2 numeros y sumarle todos los numeros que esten entre ellos
function sumbetween(a, b){
     if(a < 0 || b < 0){
    return 'ERROR';
} else if(!Number.isInteger(a) || !Number.isInteger(b)){
    return 'ERROR';
} else if (a < b){
    return sum(a, b);
} else if(a > b){
    [a, b] = [b, a];
    return sum(a, b);
}
function sum(a, b){
    let total = 0;
    for (let i = a; i < b; i++) {
        total += i;
    }
    return total;
}
}



















function removeFromArray(array, toRemove) {
        toRemove.forEach(item => {
        array.includes(item) ? array.splice(array.indexOf(item), 1) : console.log(item + " Not found");
    }); 
    return array;
    }

// try 3

function removeFromArray2(array, ...toRemove) {
        if(Array.isArray(toRemove)){
            toRemove.forEach(item => { 
                array.includes(item) ? array.splice(array.indexOf(item), 1) : console.log(item + " Not Found on Array")})
        
            } else if (typeof toRemove == "string" || typeof toRemove == "number"){
            array.includes(toRemove) ? array.splice(array.indexOf(toRemove), 1) : console.log(toRemove + " Not Found on Array");
            }
        return array
    }


// try 4 xdddd i need to learn to read the fucking tests.
let arrayy = [0, 1, 1, 1, 6, 2, 3, 4, 5, "hola", "greetings", "hi", 10, 100];
let remov = [1 , 6, "hola"];

function removeFromArray3(array, ...toRemove) {
    let removed = array.filter((item, index) => !toRemove.includes(item));
    return removed;
}
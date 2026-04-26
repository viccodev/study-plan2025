let arr = ["ejm", 1, 2, 3, "hola", "hola"];
let multiply = arr.map(item => {
if (typeof item === "number") {
	return item * 2;
} else {
return item;
}
});

    let result = multiply.reduce((total, actual) => {
    if(typeof actual === "number"){
        return total + actual;
    }else {
        actual}
        return total}, 0);
    console.log(result);
    console.log(multiply);
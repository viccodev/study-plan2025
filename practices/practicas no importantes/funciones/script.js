function checkAge(age){
    return age > 18 || confirm("Tus padres te lo permitieron?");
}


function checkAge2(age2){
    return age2 > 18 ? "Eres mayor de edad" : confirm("Tus padres te lo permitieron?");
}

function minorOf(n, n2){
    return n < n2 ? n  : n2;  
}

function potency(n, n2){
    return n > 0 ? n ** n2 : `Power ${n} is not supported, use a positive integer`;
}

// 1
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// 1



// ME
let askfunction = (question, yes, no) => {
    if (confirm(question)) yes(); else no();
}

ask("Do you agree?", 
    function() { alert("You agreed.");},
    function() { alert("You canceled the execution");} 
)

/*Let’s write some functions! Write these in the script tag of a skeleton HTML file. If you’ve forgotten how to set it up, review our instructions on how to run JavaScript code.

For now, just write each function and test the output with console.log.

    Write a function called add7 that takes one number and returns that number + 7.
        add7(10) should return 17
    Write a function called multiply that takes 2 numbers and returns their product.
        multiply(3, 2) should return 6
    Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
        capitalize("abcd") should return "Abcd"
        capitalize("ABCD") should return "Abcd"
        capitalize("aBcD") should return "Abcd"
    Write a function called lastLetter that takes a string and returns the very last letter of that string:
        lastLetter("abcd") should return "d"
Ejercicio*/

function add7(n){
    return n + 7;
}
function multiply(n, n2){
    return n * n2;
}
function capitalize(toupcase){
    return toupcase.toUpperCase().charAt(0) + toupcase.slice(1).toLowerCase(); 
}
function lastLetter(lastL){
    return lastL.at(-1);
}
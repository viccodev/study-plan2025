/* let edad = prompt("Ingresa tu edad para saber si estas entre los 14 y 90");
if (edad >= 14 && edad <= 90){
    alert("Felicidades, eres apto para registrarte!");
} else if (edad >= 1 && edad <= 13) {
    alert("No tienes la edad requerida!");
} else if (!(edad < 90)) {
    alert("eres muy viejito!");
} else if (edad ){
    alert("Porfavor ingresa solo numeros");
}
Codigo 1*/

let adminpassword = "Pingoro";
let userGivenPaswword = prompt("Please, enter the password");

if (userGivenPaswword == adminpassword) {
    alert("Acesso exitoso!");

} else if (userGivenPaswword != adminpassword && userGivenPaswword != null && userGivenPaswword != "") {
    alert("Contrasena incorrecta, acceso denegado");

} else if (userGivenPaswword == null || userGivenPaswword == "") {
    alert("No se ha ingresado un valor valido");
    
} else {
    alert("closing");
}

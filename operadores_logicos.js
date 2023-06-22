//Operador AND
function mayor_y_menor_y_par(num) {
    if (num > 5 && num < 10 && num % 2 === 0)
    console.log(true);
    else console.log (false);
}

mayor_y_menor_y_par(5)
mayor_y_menor_y_par(2)

console.log("OPERADOR OR");
//Operador or
function operador_or(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
        else console.log(false);
 }
 operador_or('Henry');
 operador_or('Javascript');
 operador_or('H');

 //Negacion
 function negacion (permiso) {
    if(permiso !== true) console.log("tiene permiso");
 }

negacion(false);

 function condicion_compleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log (false);
 }

 condicion_compleja(10);
 condicion_compleja(6);
 condicion_compleja(3);
 condicion_compleja(5);
 
function sumatres(x) {
    console.log(x + 3);
};

sumatres(5);

//PRIMERO
function sumatres(x) {
    return x + 3;
};

//SEGUNDO
var sumatres = function (x) {
    return x + 3;
};

//TERCERO
var sumatres = (x) => {
    return x + 3;
};

//CONSOL.LOG
//Nos da una ayuda visual solbre la variable
//NINGUNA APLICACION O PROGRAMA REAL DEBERIA TENER UN CONSOLE.LOG() DENTRO DEL CODIGO
//cuando hayamos apoyado en su utilidad se debe eliminar

//RETURN
//
//fundamental para toda funcion ya que es la instruccion que va a indicar que valor
//nos debe debolver.

function cuidadoconelconsolelog(nombre) {
    console.log(nombre);
    return nombre;
}

function otrafuncion() {
    return (
 //       "el nombre retornado por la funcion "cuidadoconelconsolelog" es: " +
        cuidadoconelconsolelog("elias")
    );
}

//todo lo que se encuentre por debajo del return NO SE VA A EJECUTAR
function cuidadoconelreturn (nombre) {
    return nombre;
    console.log(nombre);
}

//Las FUNCIONES son bloques de codigo que podemos ejecutar y nos retornaran un valor como resultado
//USAR console.log solo para ayudarnos a programar
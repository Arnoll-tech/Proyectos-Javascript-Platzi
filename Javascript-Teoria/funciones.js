//funciones declarativas

function miFuction () {
    return 3;
}

miFuction();

//funciones de expresion
var miFuction = function(a, b) {
    return a + b;
}

miFuction();

//ejemplo de funcion declarativa
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}


saludarEstudiantes("Arnoll Bermudez");


//sumar con una funcion

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
//ejemplo de un afuncion if, else, con varias validaciones anidadas

var edad = 61;

if(edad === 18){
    console.log("Puedes votar, sera tu primera votacion");
} else if(edad > 60){
    console.log("Ya no puedes votar, eres muy mayor");
} else if(edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar, eres menor de edad");
}
 
//hacer un if de otra manera que es una condicion
//estructura de una condicion es la siguiente:
condition ? true : false;

//ejemplo de una condicion
var numero = 3;

resultado = numero === 1 ? "si soy un uno" : "no, no soy un uno";
//

//ejersicio juego piedra papel o tijera ejemplo de platzi
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};
resultado(op2,op2)



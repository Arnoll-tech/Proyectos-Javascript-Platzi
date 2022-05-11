//este es un ejersicio---------------------------------
//var culpable = window.prompt("eres culpable de lo que se te acusa?");

//if (culpable == "si") {
//    document.write("iras a la carcel");
//} else if (culpable == "no"){
//    document.write("eres inocente");
//} else{
//    document.write("la documentacion por favor");
//}

/*
este es un ejersisio para saber la culpabilidad de alguien----------------------
var cliente = window.prompt("¿Que tipo de helado te gustaria?, Tenemos los siguientes sambores: Oreo, fresa, mango, galleta, vainilla");
var precio = 0;
var divisa = " USD ";

if  (cliente == "ninguno") {
    document.write("Adios, que tenga buen dia");
} else if(cliente == "oreo"){
    var precio = 1;
    document.write("seria " + precio + divisa +", tome su orden");
} else if(cliente == "fresa"){
    var precio = 1.25;
    document.write("seria " + precio + divisa +", tome su orden");
} else if(cliente == "mango"){
    var precio = 0.70;
    document.write("seria " + precio + divisa +", tome su orden");
} else if(cliente == "galleta"){
    var precio = 2.5;
    document.write("seria " + precio + divisa +", tome su orden");
} else if(cliente == "vainilla"){
    var precio = 1.90;
    document.write("seria " + precio + divisa +", tome su orden");
} else {
    document.write("Disculpe no tenemos ese sabor");
}
*/

//ejemplo calculando iva de producto (iva del 19% para colombia)--------------------------------
//instrucciones
//Te recuerdo que para calcular el total 
//debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
/*
var iva = 19;
var precio = 35;

function total(subtotal) {
    var subtotal = precio + precio * iva /100;
    return subtotal;
}

total();
*/

/*
este es un ejersisio para saber el area y perimetro de un cuadrado ----------------------------------
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados.
*/
/*
var lado = 40;
var perimetro = 0;
var area = 0;

function cuadrado(area, perimetro) {
    area = lado * lado;
    perimetro = lado * 4;
    var resultado = "esta es el area " + area + " y este es el perimetro " + perimetro;
    return resultado;
}

cuadrado();
*/

/*Un poco de interactividad. ---------------------------------
En este ejercicio debes escribir un programa que lea el nombre del usuario
 y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"*/ 
/*
window.prompt("Escribe tu nombre");
var nombre = "";
function saludo(nombre) {
    document.write("Hola " + nombre);    
}
*/

/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros
 y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/
/*
var numero_1 = parseInt(window.prompt("escribe el primer numero"));
var numero_2 = parseInt(window.prompt("escribe el segundo numero"));
var numero_3 = parseInt(window.prompt("escribe el tercer numero"));

function resultado(media) {
    var media = (numero_1 + numero_2 + numero_3) / 3;
    return media;
}

resultado();
*/
/*--------------------------------------------------------------------
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche,
 luego le pide el número de kilómetros recorridos. 
 El script debe mostrar el consumo de combustible por kilómetro.
Un problme matemático muy simple numero de litros dividido por número de kilómetros.
*/
/*
let litros = parseInt(window.prompt("escribe la capacidad de tu tanque en Litros"));

let kilometros = parseInt(window.prompt("escribe el numero de kilometros recorridos"));

function resultado(recorrido) {
    let resultado = kilometros / litros;
    return resultado;
}
document.write(" este es tu consumo " + resultado() + " l/km");
*/
/*Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo
 dada en horas y minutos. 
Recuerda una hora son 6o minutos y cada minuto son 60 segundos.*/
/*
let horas = parseInt(window.prompt("inserta el numero de horas "));
let minutos = parseInt(window.prompt("inserta el numero de minutos "));

function conversion(params) {
    let conversion = horas * 60 * 60 + minutos * 60;
    return conversion;
}

conversion();
*/

/* En este script debes pedir al usuario un programa de dos dígitos-------------------------------------
 y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.
Recuerda si divides un número entre 10 el cociente entero es el número de decenas
 y el resto es el número de unidades*/
/*
 let digitos = parseInt(window.prompt("Introduce un numero de 1 a 99 "));
 let unidades, decenas;
 unidades = digitos%10;
 decenas = parseInt(digitos/10);

 document.write(" decenas = " + decenas);
 document.write(" unidades = " + unidades);
*/

/*Una tortilla de patatas lleva 200 gramos de patatas por persona.------------------------------------ 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */
/*
let personas, papas , huevos, cebollas;
personas = parseInt(window.prompt("¿Cuantas personas vienen a comer?"));
papas = personas * 200;
huevos = personas * 1;
cebollas = personas * 60;

 document.write("Para " + personas + " personas, se necesitan " + papas + " gramos de papa, " + huevos + " huevos y " + cebollas + " gramos de cebollas");
 */

/*---------------------------------------------------------------------------------
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, 
puedes estar seguro: entiendes las variables.
Teiens que escribir un prograa que intercambie el valor de dos variables. 
Al final la primera variable debe terner el valor de la sgudna y la segunda el valor de la primera



 let numero_1,numero_2 ;
 numero_1 = 10;
 numero_2 = 20;
 
let aux, aui;
aux = numero_2;
aui = numero_1;

 aux = 20;
 aui = 10;

 document.write("variable uno " + aux + " variable dos " + aui);
 */

 /*No todo van ser números. 
 Escribe un código que dado un número nos devuelva true si es un número par 
 y false si es un número impar. No usar condiconales. */
/*
 let num, comunDenominador, par;
 num = parseInt(window.prompt("introduce un numero "));
 comunDenominador = num%2;
 par = comunDenominador == 0;
 document.write("este numero es " + par);
 */

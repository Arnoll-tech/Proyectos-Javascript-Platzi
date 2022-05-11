var miNombre;
miNombre = "Arnoll";


console.log(miNombre);
var miNombre = "Arnoll Bermudez";

hey();
 function hey(miNombre = "arnolld"){
     console.log("hola" + miNombre);
 }

 //forma corrrecta de escribir una funcion de suma evitando el hoisting
 add();
function add() {
   var myNumber = 4;
   console.log(myNumber + myNumber);
}
//lo que interpreta js al momento de compilar
function add() {
    var myNumber;
    myNumber = 4;
    console.log(myNumber + myNumber);
}
add();

//Error esto no se hace ya que la variable sale del scope de la funcion y la funcion al compilar tendra el valor de "undifined"
add();
function add() {
    console.log(myNumber + myNumber);
}
var myNumber = 4;
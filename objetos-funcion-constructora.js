/*function car(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;  
}
//la funcion constructura e scuando nececitamos llamar la funcin con distintos patramtros
//escribimos la variable "New" la cual podremos colocar distintas variables modificando la funcion
let newCar = new car("Tesla", "Model_3", 2020);
console.log (newCar);

let newCar_2 = new car("Toyota", "Hilux", 2015);
console.log (newCar_2);

let newCar_3 = new car("Chevrolet", "Santurban", 2018);
console.log (newCar_3);

let newCar_4 = new car("Renault", "Cascarilla", 2013);
console.log (newCar_4);
*/
//reto hacer un loop para generar un listado de 30 carros de manera automatica


function car(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;  
}

let cars = [];
for (let i = 0; i <= 2; i++) {
    let marca, modelo, year;
    marca = prompt("Ingresa la marca del auto ");
    modelo = prompt("Ingresa el modelo del auto ");
    year = prompt("Ingresa el año del auto ");
    cars.push(new car(marca, modelo, year));
}

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]); 
}
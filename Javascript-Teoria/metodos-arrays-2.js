//metodo .find nos ayuda a buscar exactamente el prierelemnto que coincida con la conidcion y si lo encuentra lo devuelve y si no queda indefinido
/*
let articulos = [
    {nombre : "Bicicleta", costo: 3000 },
    {nombre : "Televisor", costo: 4500 },
    {nombre : "Libro", costo: 350 },
    {nombre : "Celular", costo: 2200 },
    {nombre : "Laptop", costo: 3600 },
    {nombre : "teclado", costo: 500 },
    {nombre : "Audifonos", costo: 400 },
];

let encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});
console.log(encuentraArticulo);
*/
//el metodo .forEach nos sirve para imprimir los elementos que filtremos 
/*
let articulos = [
    {nombre : "Bicicleta", costo: 3000 },
    {nombre : "Televisor", costo: 4500 },
    {nombre : "Libro", costo: 350 },
    {nombre : "Celular", costo: 2200 },
    {nombre : "Laptop", costo: 3600 },
    {nombre : "teclado", costo: 500 },
    {nombre : "Audifonos", costo: 400 },
];

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
});
*/

//este metodo some() solo valida verdadero o falso, si hay o no hay elementos que cumplan con la condicion de la funcion mas no imprime cuales son
let articulos = [
    {nombre : "Bicicleta", costo: 3000 },
    {nombre : "Televisor", costo: 4500 },
    {nombre : "Libro", costo: 350 },
    {nombre : "Celular", costo: 2200 },
    {nombre : "Laptop", costo: 3600 },
    {nombre : "teclado", costo: 500 },
    {nombre : "Audifonos", costo: 400 },
];

let articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 1000;
})

console.log(articulosBaratos);
/* RESUMEN
find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
*/
// metodo .filter par afiltrar los elemnetos de un array segun una caracteristica
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

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
console.log(articulosFiltrados);
*/
//metodo .map para mapear todo el contenido del array y trae solo lo que estamos buscando
let articulos = [
    {nombre : "Bicicleta", costo: 3000 },
    {nombre : "Televisor", costo: 4500 },
    {nombre : "Libro", costo: 350 },
    {nombre : "Celular", costo: 2200 },
    {nombre : "Laptop", costo: 3600 },
    {nombre : "teclado", costo: 500 },
    {nombre : "Audifonos", costo: 400 },
];
let nombreArticulo = articulos.map(function (articulo) {
    return articulo.nombre
})
console.log(nombreArticulo);
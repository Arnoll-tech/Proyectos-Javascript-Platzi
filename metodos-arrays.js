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
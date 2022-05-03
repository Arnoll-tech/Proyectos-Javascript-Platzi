
/*
let estudiantes = ["Arnoll", "Maria", "Sergio", "Rosa"];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
*/

let estudiantes = ["Arnoll", "Maria", "Sergio", "Rosa"];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
    
}
 let estudiantes = ["Maria", "Rosa", "Daniel", "Carlos"];

 function saludarEstudiantes(estudiante) {
     console.log(`Hola, ${estudiante}`);
 }
//con el while imprimendo antes podemos mostrar el array los elementos que van quedando
 while (estudiantes.length > 0) {
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
 }
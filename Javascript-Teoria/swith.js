//una forma de validar por casos
//segun el valor que le asigne a la variable solo va a validar ese valor y se detendra con el break
/*
switch('valor a validar') {
	case 'opción 1':
				'acción a realizar';
				break;
	}
*/
let numero = 10;
switch(numero){
    case 1:
        console.log("soy un uno");
        break;
    case 5:
        console.log("soy un cinco");
        break;
    case 10:
        console.log("soy un diez");
        break;
    default;
}


const { getQueriesForElement } = require("@testing-library/react");

const personajes = [ 'Goku' , 'Vegeta' , 'Pikolo' ];//
//console.log( personajes[0]);
//console.log( personajes[1]);
//console.log( personajes[2]);
const [ , , p3 ] = personajes;
console.log(p3)

const getArreglo = () =>{
    return ['ABC', 123]
}


//const arr = getArreglo();
//console.log(arr)
const [letras , numeros] = getArreglo();
console.log(numeros, numeros)

// Tarea
const stateUse = (valor) =>{
    return [valor, () => { console.log('Hola Mundo')}];
}

//const arr = stateUse( 'Goku' );
const [nombre, setNombre] = stateUse( 'Goku' );
//console.log(arr);

console.log(nombre);
setNombre();
//const [ nombre, setNombre ] = stateUse('goku');

//arr[1]();
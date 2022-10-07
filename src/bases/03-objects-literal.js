const persona = {
    nombre: 'tony',
    apellido: 'apolos',
    edad: 15,
    direccion:{
        ciudad: 'New York',
        zip: 35454141,
        lat: 15.64554,
        lng: 65.3533413,
    }
};


console.log( {
    persona
} );


//asignacion de referancia, no es clonar
/*const persona2 = persona;
persona2.nombre = 'Peter'
console.log( {
    persona2
} );
console.log({persona})
*/
//clonando un objeto

const Persona3 = {...persona}
Persona3.nombre = 'Miner'
console.log({Persona3})
console.log({persona})

// Desestructuracion
// Asignacion Desestructurante 

const persona = {
    nombre:'Apolos',
    edad: 45,
    clave: 'Abidadi',
    rango: 'Coronel'
};

//const { nombre, edad, clave } = persona;
//console.table(persona)
//console.log( nombre )
//console.log( edad )
//console.log( clave )

//const getpersona = ( usuario ) => {
//    const { nombre, edad, clave } = usuario;
//    console.log( edad, nombre , clave);
//}

const usoContext = ( {clave, edad, rango = 'capitan'} ) => {
    //console.log( nombre, edad , rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.564654,
            long: -42.35645
        }
    }
}
 
//const { nombreClave, anios, latlng } = usoContext(persona);
//const {lat , long} = latlng;

const { nombreClave, anios, latlng:{ lat, long } } = usoContext(persona);

//const {nombreClave, anios } = avenger;
console.log( nombreClave, anios );
//getpersona(persona);
//console.log(getpersona(persona));
console.log (lat, long)
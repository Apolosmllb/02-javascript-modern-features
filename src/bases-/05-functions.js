//Funciones en JS
//const saludar = function( nombre ){
//    return `Hola, ${ nombre }`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = (  ) => `Hola Mundo`;

//const getUser = () =>{
//   return {
//        uid: 'ABDC1542',
//       userName: 'Apolos'
//    }
//}

const getUser = () =>
    ({
        uid: 'ABDC1542',
       userName: 'Apolos'
    });

//console.log( saludar('Goku') )
//console.log(saludar2('Apolos'));
console.log(saludar3('apolos'));
console.log(saludar4());
console.log(getUser());


const getUsuarioActivo = (nombre) =>({
    uid: 'ABASADaf545846',
    username: nombre,
});
  

const usuarioActivo = getUsuarioActivo('Apolos1')
console.log( usuarioActivo)
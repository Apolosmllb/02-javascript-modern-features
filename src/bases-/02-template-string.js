const name = 'Miner';
const lastName = 'Lozano';

//const fullName = name + ' ' + lastName;
const fullName = `${name} ${lastName}`;
const saludo = ' Hola  mundo '

console.log( fullName );
console.log( saludo )

function getSaludo(name){
    return 'Hola' + name;
}

console.log(`Este es un texto: ${ getSaludo( name)}`)
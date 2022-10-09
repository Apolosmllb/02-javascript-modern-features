import { getHeroeById } from "./bases-/08-imp-exp";

/*const promesa = new Promise ((resolve, reject) => {
  setTimeout( () =>{
    //console.log('2 segundos despues')
    const heroe =  getHeroeById(2);
    //console.log(heroe)
    resolve( heroe );
    //reject( 'No se pudo encontrar el heroe' );
  }, 2000 )

});

promesa.then( (heroe) =>{
  console.log('heroe', heroe)
})
.catch(err => console.warn( err)) */

const  getHeroeByIdAsync = (id) =>{
  return new Promise ((resolve, reject) => {
    setTimeout( () =>{
      //console.log('2 segundos despues')
      const heroe =  getHeroeById(id);
      //console.log(heroe)
      if(heroe){
        resolve( heroe );
      } else {
        reject ('Heroe not found')
      }
      //reject( 'No se pudo encontrar el heroe' );
    }, 1500 )
  });

}

getHeroeByIdAsync(5)
    .then( console.log )
    .catch( error => console.warn(error) );
    //.then(heroe => console.log('heroe', heroe ))
    //.catch(console.warn);
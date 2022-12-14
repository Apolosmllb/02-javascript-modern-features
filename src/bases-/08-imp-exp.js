
//import {heroes, owners} from "../data/heroes";

import {heroes} from '../data/heroes';
//console.log( owners );
//import { heroes } from './data/heroes';
//import heroes  from './data/heroes';

/*const getHeroeById = (id) => {
    return heroes.find((heroe)=>{
      if ( heroe.id === id ){
        return true; 
      } else{
        return false;
      }
    });
}*/

/*const getHeroeById = (id) => {
    return heroes.find( (heroe) =>  heroe.id === id );
}*/

export const getHeroeById = (id) => heroes.find( (heroe) =>  heroe.id === id);

//console.log( getHeroeById(2))

export const getHeroeByOwner = (owner) =>  heroes.filter( (heroe) =>  heroe.owner === owner);
//console.log( heroes );

//console.log(getHeroeByOwner('DC'));
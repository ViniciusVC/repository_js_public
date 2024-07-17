import axios from "axios";

/**********************************************

Ex.: https://pokeapi.co/api/v2/pokemon/ditto
pokemon-species/aegislash, 
type/3, 
ability/battle-armor, 

*********************************************

https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.

*********************************************

https://pokeapi.co/api/v2/pokemon/{id do pokemon}
Ex.:
https://pokeapi.co/api/v2/pokemon/900/
    sprites.other.showdown.front_shiny
    name: "kleavor"
    order: -1

**********************************************/


const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    timeout: 2000
});

export default api;
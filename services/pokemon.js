import fetch from "node-fetch";

const getPokemon = async (pokeName) =>  {
    try{

    const res = await fetch(`${process.env.POKEMON_SPECIES}/${pokeName}`);
    const data = await res.json();
    return data['flavor_text_entries'][1]['flavor_text'];
    
    }
    catch(error){
        return { 
            error:{ message:error }
        }
    }
} 
export default getPokemon;



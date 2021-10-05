
import getPokemon from '../services/pokemon.js';
import getTranslation from '../services/translation.js';

const description = async (pokeName) => {

    const pokemon = await getPokemon(pokeName);
    const desc    = await getTranslation(pokemon);
    return desc;
    
}
export default description;

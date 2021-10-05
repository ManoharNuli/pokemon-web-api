import fetch from "node-fetch";

const getTranslation = async (pokeDesc) =>  {
      try {
         //format pokeDesc into valid query
         pokeDesc = pokeDesc.split('\n').join(' ')
         pokeDesc = pokeDesc.split(' ').join('%20')

         const res = await fetch(process.env.POKEMAN_TRANSLATION+pokeDesc);
         const data = await res.json();

         return data.error ? data : data['contents']['translated'];

      } 
      catch(error){
         return { 
            error:{ message:error }
         }
      }
} 
export default getTranslation;

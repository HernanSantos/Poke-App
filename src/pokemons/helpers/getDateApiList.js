import { getPokemonByUrl } from "./getPokemonApi";

export const getDateApiList = (data) => {
    
    const {results,next,previous} = data;

    const valores = Promise.all(
            results.map(async(res)=>{
                return await getPokemonByUrl(res.url)
            })
        )
    return valores;
}

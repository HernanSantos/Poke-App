import { getPokemonByUrl } from "./getPokemonByUrl";

export const getDateApiList = ({results}) => {
    
    const valores = Promise.all(
            results.map(async(res)=>{
                return await getPokemonByUrl(res.url)
            })
        )
    return valores;
}

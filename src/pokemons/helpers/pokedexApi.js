
import { pokemonApi } from "./pokemonApi";


export const pokedexApi = async(page=0,name="") => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    const resp = await fetch(url);
    const data = await resp.json();
    const {results} = data;

    const promesa = await Promise.all(
        results.map(async(res)=>{
            return await pokemonApi(res.name)
        })
    )
        console.log("p",promesa)
    return promesa;
}
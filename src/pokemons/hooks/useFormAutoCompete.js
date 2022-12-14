import { useEffect, useState } from 'react'

export const useFormAutoCompete = () => {

    const [namePokemon, setNamePokemon] = useState("")
    const [pokemons, setPokemons] = useState([]); 
    const [pokemonsMatch, setPokemonsMatch] = useState([]); 

    useEffect(() => {
        const loadPokemons = async()=>{
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const {results} = await resp.json();
            setPokemons(results);
        }
        loadPokemons();
    }, []);

    const searchPokemon=(text)=>{
        setNamePokemon(text);
        
        if(!text){
            setPokemonsMatch([])
        }else{
            let matches = pokemons.filter((pokemon)=>{
                const regex = new RegExp(`${text}`, "gi");
                return pokemon.name.match(regex)
            })
            setPokemonsMatch(matches);
        } 
    }

    const reset = () =>{
        setNamePokemon("")
    }

    return [namePokemon,pokemonsMatch,setPokemonsMatch,setNamePokemon,searchPokemon,reset];
}

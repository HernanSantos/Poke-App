import { useEffect, useState } from 'react'

export const useFormAutoCompete = () => {

    //autocomplete
    const [namePokemon, setNamePokemon] = useState("")
    const [pokemons, setPokemons] = useState([]); //150 pokemons
    const [pokemonsMatch, setPokemonsMatch] = useState([]); 

    //nombres 150 pokemon
    useEffect(() => {
        const loadPokemons = async()=>{
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const {results} = await resp.json();
            setPokemons(results);
        }
        loadPokemons();
    }, []);


    //buscar y guardar
    const searchPokemon=(text)=>{
        if(!text){
            setPokemonsMatch([])
        }else{
            setNamePokemon(text);
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

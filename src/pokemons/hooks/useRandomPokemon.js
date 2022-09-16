import { useEffect, useState } from "react";


export const useRandomPokemon = () => {

    const [randomPokemon, setRandomPokemon] = useState()

    const newRandomPokemon = () => {
        const random = Math.floor(Math.random()*150)
        setRandomPokemon(random)
    }

    useEffect(() => {
        newRandomPokemon();
    }, [])
    
  return [randomPokemon,newRandomPokemon]
}

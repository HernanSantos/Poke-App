import { useEffect, useState } from "react";
import { getPokemon } from "../helpers";


export const usePokemons = (id) => {

  const [infoPoke, setInfoPoke] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    const infoPokemon = async() =>{
      const getInfo =  await getPokemon(id);
      setInfoPoke(getInfo);
      setIsLoading(false);
    }

    useEffect(() => {
      infoPokemon();
    }, [])
    
  return [infoPoke,isLoading]
}

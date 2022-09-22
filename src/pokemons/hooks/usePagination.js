import { useEffect, useState } from "react";
import { getPokemon } from "../helpers";


export const usePagination = (next=1,prev=3) => {

    const [nextPoke, setNextPoke] = useState({name:"",id:""})
    const [prevPoke, setPrevPoke] = useState({name:"",id:""})
  

    const nextPokemon = async() =>{
      const getInfo =  await getPokemon(next);
      const {name,id} = getInfo[0];
      setNextPoke({name,id});
    }

    const prevPokemon = async() =>{
      const getInfo =  await getPokemon(prev);
      const {name,id} = getInfo[0];
      setPrevPoke({name,id});
    }
    
    useEffect(() => {
        nextPokemon();
        prevPokemon();
    }, [])
    
    return {nextPoke,prevPoke}
}

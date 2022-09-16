import { useEffect, useState } from "react"


export const useComparePokemons = (namePokemon, valueForm) => {

    const [compare, setCompare] = useState();
    const [counter, setCounter] = useState()

    console.log("valueForm:", valueForm)
    console.log("name:", namePokemon)
    console.log("compare", compare)
    console.log("counter", counter)

    useEffect(() => {
        if(namePokemon){
            setCompare(false);
            if(namePokemon?.toLowerCase() == valueForm){
                setCompare(true)
                setCounter(3)
            }else{
                setCompare(false)
                setCounter(()=> counter -1 )
            }
        }        
    }, [valueForm])
    
  return [compare,counter,setCompare]
}

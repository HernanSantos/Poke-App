import { useEffect, useState } from "react"


export const useComparePokemons = (namePokemon, valueForm) => {

    const [compare, setCompare] = useState();
    const [counter, setCounter] = useState(3)

    console.log("name:", namePokemon)
    console.log("compare",compare)

    useEffect(() => {
        if(namePokemon){
            setCompare(false);
            if(namePokemon?.toLowerCase() === valueForm){
                setCompare(true)
            }else{
                setCompare(false)
                setCounter(()=> counter -1 )
            }
        }        
    }, [valueForm])

    const resetValue = () =>{
        setCompare();
        setCounter(3);
    }

  return [compare,counter,resetValue]
}

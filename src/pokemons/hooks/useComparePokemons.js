import { useEffect, useState } from "react"


export const useComparePokemons = (namePokemon, valueForm) => {

    const [compare, setCompare] = useState();
    const [counter, setCounter] = useState(3)
    const [isOpenModal, setIsOpenModal] = useState()

    console.log("name:", namePokemon)

    useEffect(() => {
        if(namePokemon){
            setCompare(false);
            if(namePokemon?.toLowerCase() === valueForm.toLowerCase()){
                setCompare(true)
            }else{
                setCompare(false)
                setIsOpenModal(true)
                setCounter(()=> counter -1 )
            }
        }        
    }, [valueForm])

    const resetValue = () =>{
        setCompare();
        setCounter(3);
        setIsOpenModal();
    }

  return [compare,counter,isOpenModal,setCounter,resetValue,setIsOpenModal]
}

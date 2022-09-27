import { useEffect, useState } from "react"


export const CluePokemon = ({types=[]}) => {

    const [buttonState, setButtonState] = useState(false)

    var typePokemons = ""

    for (var i = 0; i< types.length; i++){
         if(i == types.length-1){
            typePokemons = typePokemons.concat(types[i]?.type.name)
        }else{
            typePokemons = typePokemons.concat(types[i]?.type.name + " y ")
        } 
    }
    
    useEffect(() => {
        setButtonState(false)
    }, [types])
    
  return (
    <div className="div-clue">
        <span className={`${buttonState ? "span-clue-revealed" :"span-clue-hide"}`}>
            Este pokemon es tipo {typePokemons} 
        </span>
        <button className={`button-clue ${!buttonState ?"enabled" :"disabled"}`} 
                disabled={buttonState} 
                onClick={()=> setButtonState(true)}
        >
            Pista
        </button>
    </div>
  )
}

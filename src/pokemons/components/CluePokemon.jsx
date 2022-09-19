import { useEffect, useState } from "react"


export const CluePokemon = ({types=[]}) => {

    const [buttonState, setButtonState] = useState(false)

    var typePokemons = ""

    for (var i = 0; i< types.length; i++){
        console.log("estoy aca")
         if(i == types.length-1){
            typePokemons = typePokemons.concat(types[i]?.type.name)
            console.log("1",typePokemons)
        }else{
            typePokemons = typePokemons.concat(types[i]?.type.name + " & ")
            console.log("2",typePokemons)
        } 
    }
    
    useEffect(() => {
        setButtonState(false)
        
    }, [types])
    
  return (
    <div>
        <span className={`${buttonState ? "span-clue-revealed" :"span-clue-hide"}`}>Este pokemon es tipo: {typePokemons} </span>
        <button disabled={buttonState} onClick={()=> setButtonState(true)}>
            Pista
        </button>
    </div>
  )
}

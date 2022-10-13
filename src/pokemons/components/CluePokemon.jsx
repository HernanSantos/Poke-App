import { useEffect, useState } from "react"
import {useTranslation} from "react-i18next";


export const CluePokemon = ({types=[]}) => {
    
    const [t, i18n] = useTranslation("global")
    const [buttonState, setButtonState] = useState(false)

    var typePokemons = ""

    for (var i = 0; i< types.length; i++){
         if(i == types.length-1){
            typePokemons = typePokemons.concat(types[i]?.type.name)
        }else{
            typePokemons = typePokemons.concat(types[i]?.type.name + " & ")
        } 
    }
    
    useEffect(() => {
        setButtonState(false)
    }, [types])
    
  return (
    <div className="div-clue">
        <span className={`${buttonState ? "span-clue-revealed" :"span-clue-hide"}`}>
        {t("page-who-that-pokemon.clue-text")} {typePokemons} 
        </span>
        <button className={`button-clue ${!buttonState ?"enabled" :"disabled"}`} 
                disabled={buttonState} 
                onClick={()=> setButtonState(true)}
        >
            {t("page-who-that-pokemon.clue")}
        </button>
    </div>
  )
}

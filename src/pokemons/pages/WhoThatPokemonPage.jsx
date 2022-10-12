import { useEffect, useRef, useState } from "react"
import {useTranslation} from "react-i18next";

import { useNavigate } from "react-router-dom";
import { CluePokemon } from "../components/CluePokemon";
import { getWhoThatPokemon } from "../helpers"
import { useRandomPokemon,useComparePokemons,useFormAutoCompete } from "../hooks";

export const WhoThatPokemonPage = () => {

    const [t, i18n] = useTranslation("global")
    //state
    const [whoPokemon, setWhoPokemon] = useState();
    const [inputValue, setInputValue] = useState("")

    //hooks
    const [namePokemon,pokemonsMatch,setPokemonsMatch,setNamePokemon,searchPokemon,reset] = useFormAutoCompete();
    const [randomPokemon,newRandomPokemon] = useRandomPokemon();
    const [compare,counter,isOpenModal,setCounter,resetValue,setIsOpenModal] = useComparePokemons(whoPokemon?.name,inputValue);

    const inputRef = useRef(null);

    const navigate = useNavigate();
    const onPokePage=()=>{
        if(compare || counter ===  0){
            navigate(`../pokedex/${whoPokemon.name}`)
        } 
    }
    
    useEffect(() => {
        setTimeout(() => {
            setIsOpenModal(false)
          }, 2500);        
    }, [inputValue])
    
    const restoreValues = () =>{
        newRandomPokemon()
        resetValue()
    }

    useEffect(() => {
        if (randomPokemon){
            const dataPokemon = async()=>{
                const {id,
                    name,
                    types,
                    sprites: {
                    other: {
                        "official-artwork": {front_default},
                    },
                    },} = await getWhoThatPokemon(randomPokemon)
            setWhoPokemon({id,name,front_default,types})
            }
            dataPokemon();
        }
    }, [randomPokemon])

   
    const handleSubmit = (event) =>{
        event.preventDefault();
        setInputValue(namePokemon);    
        setPokemonsMatch([]);
        reset();
    }

    const handleClick=(name)=>{
        setNamePokemon(name);
        inputRef.current.focus();
        setPokemonsMatch([]);
    }

  return (
        <div className="who-pokemon-container ">
            <div>
                 <span className= "nombre-whothatpokemon-span">{t("page-who-that-pokemon.who-is-that-pokemon")}</span>
            </div>
            
            <div className="form-pokemon">
                <form onSubmit={handleSubmit} className="autocomplete-submit">
                    <input 
                        type="text"
                        ref={inputRef}
                        placeholder={t("page-who-that-pokemon.enter-name")}
                        value={namePokemon}
                        onChange={(e)=>searchPokemon(e.target.value)}
                        autoFocus
                    />

                    <ul className="ul-autocomplete">
                        {pokemonsMatch && pokemonsMatch.map((item)=>(
                                <li className="li-autocomplete" 
                                    onClick={(e)=>handleClick(e.target.innerHTML)} 
                                    key={item.name}>
                                    {item.name}
                                </li>
                        ))}
                    </ul>
                    <div className="div-button-submit">
              <button className="button-submit" onClick={handleSubmit}>{t("page-who-that-pokemon.submit")}</button>
            </div>
                </form>
                

                <div className={`modal ${isOpenModal && counter != 0 && "modal-open"}`}>
                    <div className="modal_dialog">
                        <span>{t("page-who-that-pokemon.fail")}</span>
                        <span>{t("page-who-that-pokemon.attempts-remaining")}: {counter}</span>
                    </div>
                </div>

            </div>

            <CluePokemon types={whoPokemon?.types}/>

            <div className="win-lose">
            {
                (compare && (counter >  0)) && <span className="nombre-whothatpokemon">{t("page-who-that-pokemon.victory")}</span>
            }
            {
                (counter ===  0)  && <span className="nombre-whothatpokemon">{t("page-who-that-pokemon.defeat")}</span>
            }
            </div>

            <div>
                {
                    (compare || counter === 0) && <span className="nombre-whothatpokemon">{whoPokemon?.name}</span>
                }
            </div>

            <div className="whoPokemonCard" onClick={onPokePage}>
                {whoPokemon?.front_default && 
                    <img src={whoPokemon.front_default} 
                        alt="pokemon" 
                        className={`card  xl ${(compare || counter ===  0) ? "who-img-revealed" : "who-img-hidden"}`}
                    />
                }
            </div>
            
            <div className="div-surrender">
                <button className={`surrender ${counter != 0 && !compare ? "view-input-revealed" :"view-input-hidden"}`}
                        onClick={()=>setCounter(0)}>
                    {t("page-who-that-pokemon.surrender")}
                </button>
            </div>

            <div>
                <button 
                    onClick={restoreValues} 
                    className={`button-start-game ${(counter ===  0 || compare) ? "view-input-revealed" :"view-input-hidden"}`}>
                    {t("page-who-that-pokemon.try-again")}
                </button>
            </div>    
    </div>
  )
}
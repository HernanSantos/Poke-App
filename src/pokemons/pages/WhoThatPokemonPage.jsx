import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CluePokemon } from "../components/CluePokemon";
import { getWhoThatPokemon } from "../helpers"
import { useRandomPokemon,useComparePokemons,useFormAutoCompete } from "../hooks";

export const WhoThatPokemonPage = () => {

    //state
    const [whoPokemon, setWhoPokemon] = useState();
    const [inputValue, setInputValue] = useState("")

    //hooks
    const [namePokemon,pokemonsMatch,setPokemonsMatch,setNamePokemon,searchPokemon,reset] = useFormAutoCompete();
    const [randomPokemon,newRandomPokemon] = useRandomPokemon();
    const [compare,counter,isOpenModal,resetValue,setIsOpenModal] = useComparePokemons(whoPokemon?.name,inputValue);

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
                 <span className= "nombre-whothatpokemon-span">¿Quien es este pokémon?</span>
            </div>
            
            <div className="form-pokemon">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        ref={inputRef}
                        placeholder="ingresar nombre"
                        value={namePokemon}
                        onChange={(e)=>searchPokemon(e.target.value)}
                        autoFocus
                    />

                    {/* mostrar sugerencias */}
                    <ul className="ul-autocomplete">
                        {pokemonsMatch && pokemonsMatch.map((item)=>(
                                <li className="li-autocomplete" onClick={(e)=>handleClick(e.target.innerHTML)} 
                                    key={item.name}
                                >{item.name}</li>
                        ))}
                    </ul>
                </form>

                <div className={`modal ${isOpenModal && counter != 0 && "modal-open"}`}>
                    <div className="modal_dialog">
                        <span>¡¡Fallaste!!</span>
                        <span>intetos disponibles: {counter}</span>
                    </div>
                </div>

            </div>

            <CluePokemon types={whoPokemon?.types}/>

            <div className="win-lose">
            {
                (compare && (counter >  0)) && <span className="nombre-whothatpokemon">¡Ganaste!</span>
            }
            {
                (counter ===  0)  && <span className="nombre-whothatpokemon">¡Perdiste!</span>
            }
            </div>

            <div>
                {(compare) && <span className="nombre-whothatpokemon">{whoPokemon?.name}</span>}
            </div>

            <div className="whoPokemonCard" onClick={onPokePage}>
                {whoPokemon?.front_default && 
                    <img src={whoPokemon.front_default} 
                        alt="pokemon" 
                        className={`card  xl ${(compare || counter ===  0) ? "who-img-revealed" : "who-img-hidden"}`}
                    />
                }
            </div>

            <div>
                <button 
                    onClick={restoreValues} 
                    className={`button-start-game ${(counter ===  0 || compare) ? "view-input-revealed" :"view-input-hidden"}`}>
                    Volver a intentar
                </button>
            </div>    
    </div>
  )
}
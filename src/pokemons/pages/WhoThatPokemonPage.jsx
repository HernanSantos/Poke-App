import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CluePokemon } from "../components/CluePokemon";
import { getWhoThatPokemon } from "../helpers"
import { useComparePokemons } from "../hooks/useComparePokemons";
import { useForm } from "../hooks/useForm";
import { useRandomPokemon } from "../hooks/useRandomPokemon";

export const WhoThatPokemonPage = () => {

    //state
    const [whoPokemon, setWhoPokemon] = useState();
    const [inputValue, setInputValue] = useState("")
    const [buttonState, setButtonState] = useState()

    //hooks
    const [valueForm,handleChange,reset] = useForm();
    const [randomPokemon,newRandomPokemon] = useRandomPokemon();
    const [compare,counter,isOpenModal,resetValue,setIsOpenModal] = useComparePokemons(whoPokemon?.name,inputValue);

    const navigate = useNavigate();
    const onPokePage=()=>{
      navigate(`../pokedex/${whoPokemon.name}`)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsOpenModal(false)
          }, 3000);        
    }, [inputValue])
    
    const restoreValues = () =>{
        newRandomPokemon()
        resetValue()
        setButtonState()
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
        setInputValue(valueForm);    
        reset();
    }

  return (
        <div className="who-pokemon-container ">
            <div>
                 <span className= "nombre-whothatpokemon-span">¿Quien es este pokémon?</span>
            </div>
            
            <CluePokemon types={whoPokemon?.types}/>

            {/* <div>
                <span className={`${buttonState ? "span-clue-revealed" :"span-clue-hide"}`}>{whoPokemon?.name}</span>
                <button disabled={buttonState} onClick={()=> setButtonState(true)}>
                    Pista++++
                </button>
            </div> */}
            

            <div className="form-pokemon">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="ingresar nombre"
                        value={valueForm}
                        onChange={handleChange}
                    />
                </form>
                <div className={`modal ${isOpenModal && counter != 0 && "modal-open"}`}>
                    <div className="modal_dialog">
                        <span>Fallaste, intetos disponibles: {counter}</span>
                    </div>
                </div>
            </div>

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
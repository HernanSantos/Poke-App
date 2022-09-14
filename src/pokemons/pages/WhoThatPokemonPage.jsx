import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getWhoThatPokemon } from "../helpers"
import { useForm } from "../hooks/useForm";


export const WhoThatPokemonPage = () => {

    const [whoPokemon, setWhoPokemon] = useState();
    const [random, setRandom] = useState("")
    const [viewInput, setViewInput] = useState(false)

    const [valueForm,handleChange,reset] = useForm();
    const [compare, setCompare] = useState();
    const [counterFail, setCounterFail] = useState()

    const randomPokemon = ()=>{
        const valorRandom = Math.floor(Math.random()*150)
        setRandom(valorRandom);
        setCompare("")
        setViewInput(true)
        setCounterFail(3)
    } 

    const navigate = useNavigate();

    const onPokePage=()=>{
      navigate(`../pokedex/${whoPokemon.name}`)
    }

    useEffect(() => {
        if(counterFail === 0){
            setCompare(true)
        }
    }, [counterFail])
    

    useEffect(() => {
        if (random.length !== 0){
            const dataPokemon = async()=>{
                const {id,
                    name,
                    sprites: {
                    other: {
                        "official-artwork": {front_default},
                    },
                    },} = await getWhoThatPokemon(random)
                setWhoPokemon({id,name,front_default})
                }
                dataPokemon();
        }
    }, [random])
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        // setValorIngresado(valueForm.toLocaleLowerCase());

        if(valueForm.toLocaleLowerCase() === whoPokemon.name){
            setCompare(true)
        }else{
            setCompare(false)
            setCounterFail((fail) => fail -1)
        }
        reset();
    }

    
  return (
    // <div className="search-container">
        <div className="who-pokemon-container ">
            <div>
                <span className= { `nombre-whothatpokemon-span ${viewInput ? "view-input-revealed" :"view-input-hidden"}`}
                    >¿Quien es este pokémon?</span>
            </div>

            {
                (counterFail > 0 && compare == false) && <span>Intentos disponibles: {counterFail}</span>
            }


            <div className="form-pokemon">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="ingresar nombre"
                        value={valueForm}
                        onChange={handleChange}
                        className={viewInput ?"view-input-revealed" :"view-input-hidden"}
                    />
                </form>
            </div>

            <div className="win-lose">
            {
                (compare && (counterFail >  0)) && <span className="nombre-whothatpokemon">¡Ganaste!</span>
            }
            {
                (counterFail ===  0)  && <span className="nombre-whothatpokemon">¡Perdiste!</span>
            }
            </div>

            <div>
                {(compare) && <span className="nombre-whothatpokemon">{whoPokemon?.name}</span>}
            </div>

            <div className="whoPokemonCard" onClick={onPokePage}>
                {whoPokemon?.front_default && 
                    <img src={whoPokemon.front_default} 
                        alt="pokemon" 
                        className={`card  xl ${compare? "who-img-revealed" : "who-img-hidden"}`}
                    />
                }
            </div>

            <div>
                <button 
                    onClick={randomPokemon} 
                    className={`button-start-game ${(counterFail ===  0) ? "view-input-revealed" :"view-input-hidden"}`}>
                    Volver a intentar
                </button>
            </div>
  
        <div>
            <button onClick={randomPokemon} className="button-start-game">
                ADIVINA EL POKEMON
            </button>
        </div>
        
    </div>
    // </div>
  )
}

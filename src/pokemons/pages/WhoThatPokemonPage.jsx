import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { getWhoThatPokemon } from "../helpers"
import { useForm } from "../hooks/useForm";


export const WhoThatPokemonPage = () => {

    const [whoPokemon, setWhoPokemon] = useState();
    const [random, setRandom] = useState("")
    const [newTry, setNewTry] = useState()

    const [inputValue, setInputValue] = useState("")

    const [valueForm,handleChange,reset] = useForm();
    const [compare, setCompare] = useState();
    const [counterFail, setCounterFail] = useState()

    useEffect(()=>{
        const randomPokemon = ()=>{
            const valorRandom = Math.floor(Math.random()*150)
            setRandom(valorRandom);
            setCompare("")
            setCounterFail(3)
        }
        randomPokemon();
        setNewTry(false)
    },[newTry]);
     

    const navigate = useNavigate();

    const onPokePage=()=>{
      navigate(`../pokedex/${whoPokemon.name}`)
    }

    useEffect(() => {
        if(counterFail === 0){
            setCompare("win")
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

    useEffect(() => {
        if(valueForm.toLocaleLowerCase() === whoPokemon?.name){
            setCompare("win")
        }else{
            setCompare("false")
            setCounterFail((fail) => fail -1)
        }
        reset();
    }, [inputValue])
    
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        setInputValue(valueForm);
    }

    const [isOpenModal, setIsOpenModal] = useState(false)


    
  return (
        <div className="who-pokemon-container ">
            <div>
                 <span className= "nombre-whothatpokemon-span">¿Quien es este pokémon?</span>
            </div>

            {
                (counterFail > 0) && <span>Intentos disponibles: {counterFail}</span>
            }

            <div>
                <button onClick={()=>setIsOpenModal(true)}>abrir modal</button>
                <Modal 
                    isOpen={isOpenModal} 
                    closeModal = {()=>setIsOpenModal(false)} 
                    counterFail={counterFail}
                />
            </div>

            <div className="form-pokemon">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="ingresar nombre"
                        value={valueForm}
                        onChange={handleChange}
                    />
                </form>
            </div>

            <div className="win-lose">
            {
                (compare == "win" && (counterFail >  0)) && <span className="nombre-whothatpokemon">¡Ganaste!</span>
            }
            {
                (counterFail ===  0)  && <span className="nombre-whothatpokemon">¡Perdiste!</span>
            }
            </div>

            <div>
                {(compare == "win") && <span className="nombre-whothatpokemon">{whoPokemon?.name}</span>}
            </div>

            <div className="whoPokemonCard" onClick={onPokePage}>
                {whoPokemon?.front_default && 
                    <img src={whoPokemon.front_default} 
                        alt="pokemon" 
                        className={`card  xl ${(compare == "win" || counterFail ===  0) ? "who-img-revealed" : "who-img-hidden"}`}
                    />
                }
            </div>

            <div>
                <button 
                    onClick={()=>setNewTry(true)} 
                    className={`button-start-game ${(counterFail ===  0 || compare === "win") ? "view-input-revealed" :"view-input-hidden"}`}>
                    Volver a intentar
                </button>
            </div>    
    </div>
  )
}
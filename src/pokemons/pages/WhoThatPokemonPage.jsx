import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getWhoThatPokemon } from "../helpers"
import { useForm } from "../hooks/useForm";


export const WhoThatPokemonPage = () => {

    const [whoPokemon, setWhoPokemon] = useState();
    const [random, setRandom] = useState()
    const [valorIngresado, setValorIngresado] = useState("")

    const [valueForm,handleChange,reset] = useForm();

    const randomPokemon = ()=>{
        const valorRandom = Math.floor(Math.random()*150)
        setRandom(valorRandom);
    } 

    const handleSubmit = (event) =>{
        event.preventDefault();
        setValorIngresado(valueForm.toLocaleLowerCase())
        reset();
    }

    useEffect(() => {
        if (random !== undefined){
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
    

  return (
    <div className="search-container">
        <div className='text-center'>
            <Link
            to="/">
                <img src="/assets/pokemon-logo.png" alt="pokemon-logo" />
            </Link>
      </div>

      <div>

        <h2 className="text-center">¿Quien es este pokémon?</h2>

        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="ingresar nombre"
                    value={valueForm}
                    onChange={handleChange} 
            />
        </form>

        <div className="whoPokemonCard">
            {(whoPokemon?.name === valorIngresado)
                ? <div>{whoPokemon.name} {whoPokemon.id}</div>
                :   ""
            }
            {whoPokemon?.front_default && <img src={whoPokemon.front_default} alt="pokemon" className="who-img"/>}
        </div>
        
        <button onClick={randomPokemon}>
            COMENZAR EL JUEGO
        </button>
      </div>
    </div>
  )
}

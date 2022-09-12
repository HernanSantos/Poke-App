import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getWhoThatPokemon } from "../helpers"
import { useForm } from "../hooks/useForm";


export const WhoThatPokemonPage = () => {

    const [whoPokemon, setWhoPokemon] = useState();
    const [random, setRandom] = useState("")
    const [viewInput, setViewInput] = useState(false)

    const [valueForm,handleChange,reset] = useForm();
    const [compare, setCompare] = useState();

    const randomPokemon = ()=>{
        const valorRandom = Math.floor(Math.random()*150)
        setRandom(valorRandom);
        setCompare("")
        setViewInput(true)
    } 

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
        }
        reset();
    }

    
  return (
    <div className="search-container">
        <div className='text-center'>
            <Link
            to="/">
                <img src="/assets/pokemon-logo.png" alt="pokemon-logo"/>
            </Link>
      </div>

      <div>

        <h2 className= { `text-center" ${viewInput ? "view-input-revealed" :"view-input-hidden"}`}>¿Quien es este pokémon?</h2>

        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="ingresar nombre"
                    value={valueForm}
                    onChange={handleChange}
                    className={viewInput ?"view-input-revealed" :"view-input-hidden"}
            />
        </form>

        <div className="whoPokemonCard">
            {(compare) && <div>{whoPokemon?.name}</div>
            }

            {whoPokemon?.front_default && 
                <img src={whoPokemon.front_default} 
                    alt="pokemon" 
                    className={(compare)? "who-img-revealed" : "who-img-hidden"}/>
                    }
        </div>
        
        <button onClick={randomPokemon}>
            COMENZAR EL JUEGO
        </button>
      </div>
    </div>
  )
}

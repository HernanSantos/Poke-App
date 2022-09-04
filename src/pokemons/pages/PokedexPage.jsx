import {usePagination} from "../hooks/usePagination"
import { useEffect, useState } from "react"
import { PokeCard } from "../components/PokeCard"
import { PokePagination } from "../components/PokePagination"
import { pokedexApi } from "../helpers/pokedexApi"
//import { useReducer } from "react"


export const PokedexPage = () => {

  const [page, setPage] = useState(0)
  const [pokk, setPokk] = useState()


  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const dataPage = await pokedexApi(page)
      setPokk(dataPage)
    }
    getPokemonsPage();
  },[page])

  const [value, setValue] = useState("");
  const [pokeData, setPokeData] = useState([]);


  const handleChange = (event) =>{
    setValue(event.target.value)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();

    const data = await pokemonApi(value);
    setPokeData(data)
    setValue("");
  }

  return (
    <div className="prueba">
      <h2>pokedex</h2>

      <div className='text-center'>
        <h1>PokeApp</h1>
        </div>
          <div className='text-center'>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="text-center w-50 justify-content-center"
                id="exampleFormControlInput1" 
                placeholder="ingresa nombre o numero del pokemon"
                value={value}
                onChange={handleChange}/>
            </form>
          </div>

          <PokePagination page={page}/>
          
      {page}
      <hr />
      <button onClick={()=>setPage(page+10)}>
        aumentar
      </button>
      <div className="container-card"> 
            {   
              pokk?.map(pokes => (
                <div>
                  <PokeCard key={pokes.id} value={pokes}/>
                </div>
              ))
            }
      </div>
    </div>

  )
}

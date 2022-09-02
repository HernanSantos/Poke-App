import { useState } from 'react'
import { pokemonApi } from '../helpers/pokemonApi';
import { PokeCard } from '../components/PokeCard';


export const PokePage = () => {
  const [value, setValue] = useState("");
  const [pokeData, setPokeData] = useState("");

  const handleChange = (event) =>{
    setValue(event.target.value)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();

    const data = await pokemonApi(value);
    setPokeData({data})
    setValue("");
  }

  return (
    <div>
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

        <div className='d-flex justify-content-center mt-3'>
          { 
            (pokeData === "")
            ? ""
            : <PokeCard value = {pokeData}/>
          }
        </div>
    </div>

  )
}

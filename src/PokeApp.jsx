import React, { useEffect } from 'react'
import { useState } from 'react'
import { PokeCard } from './pokemons/components/PokeCard';
import { pokemonApi } from './api/pokemonApi';

export const PokeApp = () => {

  const [value, setValue] = useState("");
  const [pokeData, setPokeData] = useState("");

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
      <div>
        <h1>PokeApp</h1>
        <hr />
          <form onSubmit={handleSubmit}>
            <input 
            id="standard-basic" 
            placeholder='nombre o numero' 
            value={value}
            onChange={handleChange}
            />
            <button type='submit'>Buscar</button>
          </form>

        {
          (pokeData !== "")
          ? <PokeCard value = {pokeData}/>
          : ""
        }

      </div>

  )
}

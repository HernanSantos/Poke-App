import { useEffect, useState } from "react"
import { PokeCard } from "../components/PokeCard"
import { getDateApiList } from "../helpers/getDateApiList";
import { getPokemon, getPokemonList } from "../helpers/getPokemonApi"


export const PokedexPage = () => {

  const [infoPoke, setInfoPoke] = useState([]); //pasar pokecard
  const [valorLista, setValorLista] = useState("0"); //valor numerico
  const [valorString, setValorString] = useState("") //valor string
  const [valueForm, setValueForm] = useState(""); //formulario

  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const dataPage = await getPokemonList(valorLista);
      const nameId = await getDateApiList(dataPage);
      setInfoPoke(nameId);
    }
    getPokemonsPage();
    console.log(infoPoke)
  },[valorLista])


  const handleSubmit = async(event)=>{
    event.preventDefault();

    if(valueForm.length <= 3 ){
      const algo = valueForm - "1"
      console.log(algo)
      setValorLista(algo)
      setValueForm("");
    }else{
      const dataPage = await getPokemon(valueForm);
      setInfoPoke(dataPage);
      //setValorString(valueForm)
      setValueForm("");
    }
  }

  return (
    <div className="prueba">
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
                value={valueForm}
                onChange={handleChange}/>
            </form>
          </div>

          {/* <PokePagination page={page}/> */}
          
      <hr />
      {/* <button onClick={()=>setPage(page+10)}>
        aumentar
      </button> */}

      <div className="container-card"> 
            {   
              infoPoke.map(pokes => (
                <div>
                  <PokeCard key={pokes.id} value={pokes}/>
                </div>
              ))
            }
      </div>
    </div>

  )
}

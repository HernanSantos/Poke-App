import { useEffect, useState } from "react"
import { PokeCard } from "../components/PokeCard"
import { getDateApiList } from "../helpers/getDateApiList";
import { getPokemon } from "../helpers/getPokemon";
import { getPokemonList } from "../helpers/getPokemonList";
import { usePagination } from "../hooks/usePagination";


export const PokedexPage = () => {

  const {pagine, next, previous} = usePagination(); //valor numerico

  const [infoPoke, setInfoPoke] = useState([]); //pasar pokecard
  const [valueForm, setValueForm] = useState(""); //formulario

  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const valores = await getPokemonList(pagine);
      const nameId = await getDateApiList(valores);
      console.log(nameId)
      setInfoPoke(nameId);
    }
    getPokemonsPage();
  },[pagine])

  const handleChange = (event) =>{
    setValueForm(event.target.value)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const dataPage = await getPokemon(valueForm);
    console.log("DATA", dataPage)
    setInfoPoke(dataPage);
    setValueForm("");
  }

  return (
    <div className="search-container">
      <div className='text-center'>
        <h1>PokeApp</h1>
        </div>
          <div className='text-center'>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="text-input"
                id="exampleFormControlInput1" 
                placeholder="ingresa nombre o numero del pokemon"
                value={valueForm}
                onChange={handleChange}/>
            </form>
          </div>

          <nav aria-label="Page navigation example">
            <div className="pagination justify-content-end">

              <div className="page-item">
                  <button  onClick={()=>previous()}>Previous</button>
              </div>

              <div className="page-item">
                  <button  onClick={()=>next()}>Next</button>
              </div>
            </div>
          </nav>
          
      <hr />

      <div className="container-card"> 
            {   
              infoPoke.map(pokes => (
                <div>
                  <PokeCard key={pokes.id} {...pokes}/>
                </div>
              ))
            }
      </div>
    </div>
  )
 }
import { useEffect, useState } from "react"
import { PokeCard } from "../components/PokeCard"
import {getPokemonList, getPokemon, getDateApiList} from "../helpers/index"


export const PokedexPage = () => {

  const [nextPagine, setNextPagine] = useState();
  const [prevPagine, setPrevPagine] = useState();
  const [pagine, setPagine] = useState();

  const [infoPoke, setInfoPoke] = useState([]); //pasar pokecard
  const [valueForm, setValueForm] = useState(""); //formulario


  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const {next,previous,results} = await getPokemonList(pagine);
      console.log(next,previous,results)
      
      const nameId = await getDateApiList(results);
      setInfoPoke(nameId);
      setNextPagine(next);
      setPrevPagine(previous);
    }
    getPokemonsPage();
  },[pagine])


  const handleChange = (event) =>{
    setValueForm(event.target.value)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const dataPage = await getPokemon(valueForm);
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
                  <button  onClick={()=> {prevPagine !== null && setPagine(prevPagine)}}>Previous</button>
              </div>

              <div className="page-item">
                  <button  onClick={()=>setPagine(nextPagine)}>Next</button>
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
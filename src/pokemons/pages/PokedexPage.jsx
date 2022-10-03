import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../components/PokeCard"
import {getPokemonList, getDateApiList, getWhoThatPokemon} from "../helpers"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useForm } from "../hooks";

export const PokedexPage = () => {

  const [nextPagine, setNextPagine] = useState();
  const [prevPagine, setPrevPagine] = useState();
  const [pagine, setPagine] = useState();

  const [infoPoke, setInfoPoke] = useState([]); //pasar pokecard

  const [valueForm,handleChange,reset] = useForm();

  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const {next,previous,results} = await getPokemonList(pagine);      
      const nameId = await getDateApiList(results);
      setInfoPoke(nameId);
      setNextPagine(next);
      setPrevPagine(previous);
    }
    getPokemonsPage();
  },[pagine])

  const navigate = useNavigate();

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const dataPage = await getWhoThatPokemon(valueForm);
    console.log(dataPage.name)
    navigate(`/pokedex/${dataPage.name}`,{replace:true})
    reset();
  }
  return (
    <div className="search-container">

          <div className='form-pokemon'>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="searchPokemon"
                placeholder="buscar pokémon"
                value={valueForm}
                onChange={handleChange}
              />
            </form>
            <div className="div-button-submit">
              <button className="button-submit" onClick={handleSubmit}>Enviar</button>
            </div>
          </div>

          <nav aria-label="Page navigation example">
            <div className="pagination justify-content-end">

              <div className="page-item">
                  <button className="buttonNavigate" onClick={()=> {prevPagine !== null && setPagine(prevPagine)}}><ChevronLeftIcon/>Anterior</button>
              </div>

              <div className="page-item">
                  <button className="buttonNavigate" onClick={()=>setPagine(nextPagine)}>Siguiente<ChevronRightIcon/></button>
              </div>
            </div>
          </nav>
          
      <div className="container-card "> 
            {   
              infoPoke?.map((pokes,index) => (
                <div>
                  <PokeCard key={index} {...pokes}/>
                </div>
              ))
            }
      </div>
    </div>
  )
 }
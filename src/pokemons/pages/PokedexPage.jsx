import { useEffect, useState } from "react"
import { PokeCard } from "../components/PokeCard"
import { getDateApiList } from "../helpers/getDateApiList";
import { getPokemon, getPokemonList,getPokemonByUrl } from "../helpers/getPokemonApi"


export const PokedexPage = () => {

  const [infoPoke, setInfoPoke] = useState([]); //pasar pokecard

  const [nombre, setNombre] = useState("0");
  const [valueForm, setValueForm] = useState(""); //formulario

  useEffect(()=>{
    const getPokemonsPage = async()=>{
      const dataPage = await getPokemonList(nombre);
      const nameId = await getDateApiList(dataPage);
      setInfoPoke(nameId);
    }
    getPokemonsPage();
  },[nombre])

  const prueba = Number("lalalalalalalaal")
  console.log(prueba)
  //console.log(typeof(prueba))

  console.log("INFOPOKE",infoPoke)

  const handleChange = (event) =>{
    setValueForm(event.target.value)
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    await getPokemon(valueForm);
    //await getPokemonByUrl("https://pokeapi.co/api/v2/pokemon/1/");
    setNombre(valueForm)
    setValueForm("");
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
              infoPoke?.map(pokes => (
                <div>
                  <PokeCard key={pokes.id} value={pokes}/>
                </div>
              ))
            }
      </div>
    </div>

  )
}

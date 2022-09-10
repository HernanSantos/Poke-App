import { useParams } from "react-router-dom";
import { PokeCardPlus } from "../components/PokeCardPlus";
import {usePokemons} from "../hooks/usePokemons"
import {Link} from "react-router-dom"

export const PokemonPage = () => {

  const {id} = useParams();

  const {infoPoke,isLoading} = usePokemons(id);

  return (

  <>
    <div className='text-center'>
      <Link
          to="/">
            <img src="/assets/pokemon-logo.png" alt="pokemon-logo" />
        </Link>
      </div>

    {
      isLoading && (<h2>Cargando...</h2>)
    }

      {
        infoPoke.map(poke=>(
          <PokeCardPlus
            key = {poke.id}
            {...poke}/>
        ))
      }
  </>
)
}


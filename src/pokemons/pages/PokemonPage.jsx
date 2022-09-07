import { useParams } from "react-router-dom";
import { PokeCardPlus } from "../components/PokeCardPlus";
import {usePokemons} from "../hooks/usePokemons"

export const PokemonPage = () => {

  const {id} = useParams();

  const {infoPoke,isLoading} = usePokemons(id);

  return (

  <>
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


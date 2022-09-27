import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PokeCardPlus } from "../components/PokeCardPlus";
import {usePokemons} from "../hooks"

export const PokemonPage = () => {

  const {id} = useParams();

  const {infoPoke,isLoading} = usePokemons(id);

  return (
    <div>
        {(isLoading) 
          ? <Loading />
          : infoPoke.map(poke=>(
              <PokeCardPlus key = {poke.id} {...poke}/>
            ))
        }
    </div>
)
}


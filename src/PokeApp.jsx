import { Navbar } from './pokemons/components/Navbar';
import { PokeLogo } from './pokemons/components/PokeLogo';
import { PokeRoutes } from './pokemons/routes/PokeRoutes';


export const PokeApp = () => {

  return (

    <div>
      <Navbar/>
      <PokeLogo/>
      <PokeRoutes/>
    </div>

  )
}

import { Footer } from './pokemons/components/Footer';
import { Navbar } from './pokemons/components/Navbar';
import { PokeLogo } from './pokemons/components/PokeLogo';
import { PokeRoutes } from './pokemons/routes/PokeRoutes';


export const PokeApp = () => {

  return (
    <>
      <Navbar/>
        <div className='page-container'>
          <PokeLogo/>
          <PokeRoutes/>
        </div>
      <Footer/>
    </>
      

  )
}

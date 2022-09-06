import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexPage } from "../pages/PokedexPage"
import { PokemonPage } from "../pages/PokemonPage"
import { Navbar } from "../ui/components/Navbar"



export const PokeRoutes = () => {
  return (
    <>
      <Navbar/>

      <div className="container-pages">
        <Routes>
          <Route path="pokedex" element={<PokedexPage/>}/>
          <Route path="pokedex/:id" element={<PokemonPage/>}/>

          <Route path="/" element={<Navigate to="/pokedex"/>}/>
        </Routes>
      </div>
    </>
  )
}

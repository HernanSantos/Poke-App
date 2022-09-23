import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexPage, PokemonPage, WhoThatPokemonPage } from "../pages"

export const PokeRoutes = () => {
  return (
    <>
      <div className="container-pages">
        <Routes>
          <Route path="/" element={<PokedexPage/>}/>
          <Route path="/whothatpokemon" element={<WhoThatPokemonPage/>}/>
          <Route path="/pokedex/:id" element={<PokemonPage/>}/>

          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </>
  )
}

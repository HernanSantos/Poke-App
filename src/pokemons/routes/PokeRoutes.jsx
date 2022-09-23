import { Navigate, Route, Routes, } from "react-router-dom"
import { PokedexPage, PokemonPage, WhoThatPokemonPage } from "../pages"

export const PokeRoutes = () => {
  return (
    <>
      <div className="container-pages">
        <Routes>
          <Route exact path="/" element={<PokedexPage/>}/>
          <Route exact path="/whothatpokemon" element={<WhoThatPokemonPage/>}/>
          <Route exact path="/pokedex/:id" element={<PokemonPage/>}/>

          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </>
  )
}

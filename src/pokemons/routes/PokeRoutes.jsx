import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexPage } from "../pages/PokedexPage"
import { PokePage } from "../pages/PokePage"
import { Navbar } from "../ui/components/Navbar"



export const PokeRoutes = () => {
  return (
    <>
      <Navbar/>

      <div className="container-pages">
        <Routes>
          <Route path="home" element={<PokePage/>}/>
          <Route path="pokedex" element={<PokedexPage/>}/>

          <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
      </div>
    </>
  )
}

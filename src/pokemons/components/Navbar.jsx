import { NavLink } from "react-router-dom"

export const Navbar = () => {

  return (
    <nav className="navbar">
        <NavLink className="navbar-brand" to="/pokedex">
            <img src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1663874318/pokemon-app/zla4yhb6jl9ngrmmpvcw.png" alt="icono-pokemon" />
        </NavLink>
        <button className="toggle-collapse">
            boton
        </button>

        <div className="navbar-collapse">
            <NavLink className="navbar-nav" to="/pokedex">
                Inicio
            </NavLink>
            <NavLink className="navbar-nav" to="/whothatpokemon">
                Adivina el pokémon
            </NavLink>
        </div>
    </nav>
  )
}

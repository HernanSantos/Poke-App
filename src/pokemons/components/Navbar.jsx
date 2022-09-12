import { NavLink } from "react-router-dom"

export const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="navbar-icon">
            <NavLink className="navbar-link" to="/pokedex">
                <img src="/assets/Pokeball_icon-icons.png" alt="icono-pokemon" />
            </NavLink>
        </div>
        

        <div className="nav-menu">
            <NavLink className="navbar-link" to="/pokedex">
                Inicio
            </NavLink>
            <NavLink className="navbar-link" to="whothatpokemon">
                Adivina el pokémon
            </NavLink>
        </div>
    </nav>
  )
}

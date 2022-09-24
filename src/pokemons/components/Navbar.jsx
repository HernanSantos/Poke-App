import { useState } from "react"
import { NavLink } from "react-router-dom"
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const openNavbar=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <nav className="navbar">
        <NavLink className="navbar-brand" to="/pokedex">
            <img src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1663874318/pokemon-app/zla4yhb6jl9ngrmmpvcw.png" 
                alt="icono-pokemon"
                className="navbar-img" />
        </NavLink>
        <button className="toggle-collapse" onClick={openNavbar}>
            <DehazeIcon fontSize="large"/>
        </button>

        <div className={`navbar-collapse ${isOpen ? "collapse-hidden" :"collapse-revealed"}`} >
            <ul className="navbar-nav">
                <NavLink className="navbar-link" to="/pokedex" onClick={openNavbar}>
                    Inicio
                </NavLink>
                <NavLink className="navbar-link" to="/whothatpokemon" onClick={openNavbar}>
                    Adivina el pokémon
                </NavLink>
            </ul>
        </div>
    </nav>
  )
}

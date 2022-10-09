import { useState } from "react"
import { NavLink } from "react-router-dom"
import DehazeIcon from '@mui/icons-material/Dehaze';
import LanguageIcon from '@mui/icons-material/Language';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isOpenDropdown, setIsOpenDropdown] = useState()


    const openNavbar=()=>{
        setIsOpen(!isOpen)
    }
    const changeLanguage=()=>{
        console.log("me hice clic")
    }
  return (
    <nav className="navbar-container">
        <NavLink className="navbar-brand" to="/pokedex">
            <img src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1663874318/pokemon-app/zla4yhb6jl9ngrmmpvcw.png" 
                alt="icono-pokemon"
                className="navbar-img" />
        </NavLink>
        
        <div className={`navbar-collapse ${isOpen ? "collapse-hidden" :"collapse-revealed"}`} >
            <NavLink className="navbar-link" to="/pokedex" onClick={openNavbar}>
                Inicio
            </NavLink>
            <NavLink className="navbar-link" to="/whothatpokemon" onClick={openNavbar}>
                Adivina el pokémon
            </NavLink>
        </div>

        <div className="dropdown-menu">
            <ul className="ul-dropdown" >
                <li className="li-dropdown">ES</li>
                <li className="li-dropdown">EN</li>
            </ul>    
        </div>

        <div className="dropdown-container">
            {/* <button className="dropdown-language" onClick={()=> setIsOpenDropdown(!isOpenDropdown)}>
                <LanguageIcon fontSize="large"/>
            </button> */}
            <div className="menu-dropdown">
                <button className="dropdown-language" onClick={()=> setIsOpenDropdown(!isOpenDropdown)}>
                    <LanguageIcon fontSize="large"/>
                </button>
                <ul>
                    <li>Español</li>
                    <li>English</li>
                </ul>
            </div>
                    


            <button className="toggle-collapse" onClick={openNavbar}>
                <DehazeIcon fontSize="large"/>
            </button>
        </div>
    </nav>
  )
}

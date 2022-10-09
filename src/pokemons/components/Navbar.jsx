import { useState } from "react"
import { NavLink } from "react-router-dom"
import {useTranslation} from "react-i18next";
import DehazeIcon from '@mui/icons-material/Dehaze';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const Navbar = () => {
    const [t, i18n] = useTranslation("global")
    const [isOpen, setIsOpen] = useState(true)
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    
    const openNavbar=()=>{
        setIsOpen(!isOpen)
    }
    const changeLanguage=(language)=>{
        i18n.changeLanguage(language)
        setIsOpenDropdown(false)
    }
  return (
    <nav className="navbar-container">
        <NavLink className="navbar-brand" to="/pokedex">
            <img src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1663874318/pokemon-app/zla4yhb6jl9ngrmmpvcw.png" 
                alt="icono-pokemon"
                className="navbar-img" />
        </NavLink>
        
        <div className={`navbar-collapse ${isOpen ? "collapse-hidden" :"collapse-revealed"}`} >
            <div className="navbar-collapse-center">
                <NavLink className="navbar-link" to="/pokedex" onClick={openNavbar}>
                    {t("navbar.home")}
                </NavLink>
                <NavLink className="navbar-link" to="/whothatpokemon" onClick={openNavbar}>
                {t("navbar.who-that-pokemon")}
                </NavLink>
            </div>
        </div>

        <div className="dropdown-container">
            <div className="menu-dropdown">
                <button className="dropdown-language" onClick={()=> setIsOpenDropdown(!isOpenDropdown)}>
                    <LanguageIcon fontSize="large"/>
                </button>

                <div className={`view-dropdown ${isOpenDropdown ?"dropdown-open" :"dropdown-close"}`}>
                    <span className="arrow-ul-language"><ArrowDropUpIcon fontSize="large"/></span>
                    <ul>
                        <li onClick={()=> changeLanguage("es")}>ESPAÑOL</li>
                        <li onClick={()=> changeLanguage("en")}>ENGLISH</li>
                    </ul>
                </div>
            </div>
                    


            <button className="toggle-collapse" onClick={openNavbar}>
                <DehazeIcon fontSize="large"/>
            </button>
        </div>
    </nav>
  )
}

import {Link,NavLink} from "react-router-dom"

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <Link
      className="navbar-brand"
      to="/">
        Navbar
    </Link>
    <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ?"active" :""}`} 
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ?"active" :""}`} 
                        to="/pokedex"
                    >
                        Pokedex
                    </NavLink>
                </div>
            </div>
    </div>
    </nav>
  )
}

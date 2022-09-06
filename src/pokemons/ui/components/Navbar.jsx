import {Link,NavLink} from "react-router-dom"

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/">
            Navbar
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink 
                className={({isActive})=>`nav-item nav-link ${isActive ?"active" :""}`} 
                to="/pokedex"
            >
                Pokedex
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}



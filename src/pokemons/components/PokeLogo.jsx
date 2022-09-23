import { Link } from "react-router-dom"

export const PokeLogo = () => {

  return (
    <div className='logo-container'>
        <Link
        to="/">
            <img className="img-logo" src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1663874245/pokemon-app/rxmbstpf6v30qcdbtgup.png" alt="pokemon-logo"/>
        </Link>
    </div>
  )
}

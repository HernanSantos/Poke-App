import { Link } from "react-router-dom"

export const PokeLogo = () => {

  return (
    <div className='logo-container'>
        <Link
        to="/">
            <img src="/assets/pokemon-logo.png" alt="pokemon-logo"/>
        </Link>
    </div>
  )
}

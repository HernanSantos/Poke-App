import {Link} from "react-router-dom"

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


export const PokeCardPlus = ({
  genderlessPoke,
  malePoke,
  femalePoke,
  id,
  abilitie,
  typesPoke,
  name,
  weight,
  height,
  front_default}) => {

  const numeroPokemon = () =>{
    const nuevoId = id.toString().padStart(3,"0")
    return nuevoId
  }

  return (
    <>
      <div className='text-center'>
      <Link
          to="/">
            <img src="/assets/pokemon-logo.png" alt="pokemon-logo" />
        </Link>
      </div>
      <div className="contenedor">

        <div className="header">
          <h1>#{numeroPokemon()} {name} </h1> 
        </div>

        <div className="img">
          <img className="card-img-plus" src={front_default} alt="img-pokemon" />
        </div>
        
        <div className="contenido">
          <div className="peso">
            <span>Peso</span>
            <span>{weight/10} kg</span>
          </div>

          <div className="altura">
            <span>Altura</span>
            <span>{height/10} m</span>
          </div>
          
          <div className="habilidad">
            <span>Habilidad</span>
                {
                  abilitie.map(abili=>(
                    <div><span key={abili}>{abili}</span></div>
                  ))
                }
          </div>

          <div className='sexo'>
            <span>Sexo</span>

              <div>
                {
                (genderlessPoke !== undefined && <span>Desconocido</span>)
                }
                {
                  (malePoke !== undefined && <MaleIcon sx={{ fontSize: 30 }}/>)
                }
                {
                  (femalePoke !== undefined && <FemaleIcon sx={{ fontSize: 30 }}/>)
                }
              </div>

          </div>
        </div>

          <div className="tipo">
            <div className='tipoStyle'>
              <span>Tipo</span>
              <div className="tipo-poke">
                {
                  typesPoke.map(type=>(
                    <span className="mod-tipo" key={type}>{type}</span>
                  ))
                }
              </div>
            </div>
          </div>

        <div className='footer'>
          <h2>Evoluciones</h2>

            {/* EVOLUCIONES */}


        </div>
      </div>
    </>
  )
}
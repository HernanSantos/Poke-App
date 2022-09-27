import { usePagination } from '../hooks';
import { useNavigate } from 'react-router-dom';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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

  const numeroPokemon = (id) =>{
    return id.toString().padStart(3,"0")
  }

  const {nextPoke,prevPoke} = usePagination(id+1,id-1);

  const navigate = useNavigate();

  const onPokePage=(name)=>{
    navigate(`../pokedex/${name}`)
    window.location.reload()
  }
  return (
    <div className='pokemon-info-container'>

      <div className='siguiente-anterior'>
        <button className={`boton-pagination ${prevPoke?.id ?"view-input-revealed" :"view-input-hidden"}`} onClick={()=>onPokePage(prevPoke.name)}>
        <ArrowCircleLeftIcon fontSize="large"/> #{numeroPokemon(prevPoke.id)} {prevPoke.name}
        </button>

        <button className="boton-pagination" onClick={()=>onPokePage(nextPoke.name)}>
        {nextPoke.name} #{numeroPokemon(nextPoke.id)} <ArrowCircleRightIcon fontSize="large"/>
        </button>
      </div>

      <div className="contenedor">

        <div className="name-number-pokemon">
          <h1>#{numeroPokemon(id)} {name} </h1> 
        </div>

        <div className='img-info'>
          <img className='img' src={front_default} alt="img-pokemon" />
        </div>
        
        <div className='type-pokemon'>
          <h2>Tipo</h2>
          <div className='div-type-info'>
              {
                typesPoke.map(type=>(
                  <span className="type-info" key={type}>{type}</span>
                ))
              }
          </div>
        </div>

        <div className='info-container'>

          <div className="weight-info">
            <span>Peso</span>
            <span>{weight/10} kg</span>
          </div>

          <div className="height-info">
            <span>Altura</span>
            <span>{height/10} m</span>
          </div>
          
          <div className='gender-info'>
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

          <div className="habiliti-info">
            <span className='habiliti-span'>Habilidad</span>
            <div className='habiliti-map'>
              {
                abilitie.map(abili=>(
                  <span key={abili}>{abili}</span>
                ))
              }
            </div>  
          </div>

        </div>

      </div>
    </div>
  )
}

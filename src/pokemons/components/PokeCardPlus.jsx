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

  return (
    <div className="contenedor">

      <div className="header">
        <h1>{name} N°{id}</h1> 
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
          <span>{height/10} kg</span>
        </div>
        
        <div className="habilidad">
          <span>Habilidad</span>

            {
              abilitie.map(abili=>(
                <span key={abili}>{abili}</span>
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

        <div className="contenidoTipo">
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
      
    </div>
  )
}

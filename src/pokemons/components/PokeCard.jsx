import { Navigate, useNavigate, useParams } from "react-router-dom"


export const PokeCard = ({id,name,front_default}) => {

  const navigate = useNavigate();

  const onPokePage=()=>{
    navigate(`${name}`,{replace:true})
  }

  return (
    <div className="card" onClick={onPokePage}>
        <img src={front_default} className="card-img" alt="imagen_pokemon"/>
        
        <div className="text-container">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Pokemon N°: {id} </p>
        </div>
    </div>
  )
}

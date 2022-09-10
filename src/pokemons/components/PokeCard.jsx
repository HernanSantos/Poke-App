import { useNavigate } from "react-router-dom"


export const PokeCard = ({id,name,front_default}) => {

  const navigate = useNavigate();

  const onPokePage=()=>{
    navigate(`${name}`,{replace:true})
  }
  
  const numeroPokemon = () =>{
    const nuevoId = id.toString().padStart(3,"0")
    return nuevoId
  }

  return (
    <div className="card" onClick={onPokePage}>
        <img src={front_default} className="card-img" alt="imagen_pokemon"/>
        
        <div className="idContainer">
            <span>#{numeroPokemon()}</span>
            <span>{name}</span>
        </div>
    </div>
  )
}

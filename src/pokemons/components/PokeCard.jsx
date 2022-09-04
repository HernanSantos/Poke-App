

export const PokeCard = (data) => {

  const {hp,attack,defense,speciala,speciald,speed,id,name,weight,front_default} = data.value;

  return (
    
    <div className="card">
        <img src={front_default} className="card-img" alt="imagen_pokemon"/>
        
        <div className="text-container">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Pokemon N°: {id} </p>
        </div>

    </div>
  )
}



export const PokeCard = (data) => {

  //console.log("PRUEBA", data)

  const {id,name,front_default} = data.value;

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

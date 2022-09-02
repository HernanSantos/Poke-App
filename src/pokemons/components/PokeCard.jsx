

export const PokeCard = (data) => {

  const {hp,attack,defense,speciala,speciald,speed,id,name,weight,front_default} = data.value.data;

  return (
    
    <div className="card text-center" style={{width: 300}}>
        <img src={front_default} className="card-img-top w-50 rounded mx-auto d-block" width="2px" alt="imagen_pokemon"/>
        <div className="card-body">
            <h5 className="card-title">{name.toUpperCase() }</h5>
            <p className="card-text mb-0">Pokemon N°: {id} </p>
            <p className="card-text mb-0">weight: {weight} KG</p>
        </div>
        <ul className="list-group" >
            <li className="list-group-item">{hp.stat.name}: {hp.base_stat}</li>
            <li className="list-group-item">{attack.stat.name}: {attack.base_stat}</li>
            <li className="list-group-item">{defense.stat.name}: {defense.base_stat}</li>
            <li className="list-group-item">{speciala.stat.name}: {speciala.base_stat}</li>
            <li className="list-group-item">{speciald.stat.name}: {speciald.base_stat}</li>
            <li className="list-group-item">{speed.stat.name}: {speed.base_stat}</li>
        </ul>

        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
  )
}

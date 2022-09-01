
export const PokeCard = (data) => {

    console.log(data)
    
    const {
        id,
        name, 
        sprites:{other:{dream_world:{front_default}}},
        stats,
        weight 
    } = data.value;

    console.log("stats",stats)


  return (
    <div className="card" style={{width: 300}}>
        <img src={front_default} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name.toUpperCase()}</h5>
            <p className="card-text">Es un pokemon</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Pokemon N°: {id}</li>
            <li className="list-group-item">{weight} KG</li>
            <li className="list-group-item">{stats.base_stat}</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
  )
}

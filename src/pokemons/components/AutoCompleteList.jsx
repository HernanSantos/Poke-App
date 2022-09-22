


export const AutoCompleteList = ({pokemonsMatch}) => {




  return (
    <>
        {pokemonsMatch && pokemonsMatch.map((item)=>(
            <li onClick={(e)=>handleClick(e.target.innerHTML)} 
                key={item.name}
            ><strong>{item.name}</strong></li>
        ))}
    </>

  )
}

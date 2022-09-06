

export const PokeCardPlus = ({
  id,
  abilitie,
  typesPoke,
  name,
  weight,
  height,
  front_default}) => {

  return (
    <>
      <img src={front_default} alt="" />
      <p>{name}</p>
      <p>{id}</p>
      <p>{weight}</p>
      <p>{height}</p>
      {
        typesPoke.map(type=>(
          <p key={type}>{type}</p>
        ))
      }
      {
        abilitie.map(abili=>(
          <p key={abili}>{abili}</p>
        ))
      }
    </>
  )
}

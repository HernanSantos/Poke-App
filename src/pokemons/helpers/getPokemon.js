
export const getPokemon = async (pokemon) => {

  const urlPoke = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch(urlPoke);
  const dataNi = await resp.json();

  const {
        id,
        abilities,
        types,
        name,
        weight,
        height,
        sprites: {
        other: {
            "official-artwork": { front_default },
        },
        },
    } = dataNi;

    const typesPoke = types.map(type=>(
      type.type.name
    ));
    
    const abilitiesPoke = abilities.map(abili=>(
      !abili.is_hidden && abili.ability.name
    ));
    const abilitie = abilitiesPoke.filter(abili => abili !== false)

  return [{
    id,
    abilitie,
    typesPoke,
    name,
    weight,
    height,
    front_default }];
};

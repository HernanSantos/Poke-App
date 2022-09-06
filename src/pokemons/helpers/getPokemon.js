import { getGender } from "./getGender";

//obtener nombre + id
export const getPokemon = async (pokemon = 0) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch(url);
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
            dream_world: { front_default },
        },
        },
    } = dataNi;

    const typesPoke = types.map(type=>(
      type.type.name
    ));
    
    const abilitiesPoke = abilities.map(abili=>(
      abili.is_hidden && abili.ability.name
    ));
    const abilitie = abilitiesPoke.filter(abili => abili !== false)

    const gender = getGender(name)

  return [{ 
    id,
    abilitie,
    typesPoke,
    name,
    weight,
    height,
    front_default }];
};

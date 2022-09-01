import { PokeCard } from "../components/PokeCard";


export const GetPokemons = async(pokemon = "") => {
  console.log("llega", pokemon)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const data = await resp.json();

  return data;
}
/*id: info.id,
      name:info.name,
      hp: info.stats[0].base_stat,
      attack: info.stats[1].base_stat,
      defense: info.stats[2].base_stat,
      special_attack: info.stats[3].base_stat,
      special_defense: info.stats[4].base_stat,
      speed: info.stats[5].base_stat,
      url:info.sprites.other.dream_world.front_default
*/
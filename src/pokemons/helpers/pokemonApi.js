
export const pokemonApi = async(pokemon = "") => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const data = await resp.json();

    const {id,name,weight,stats,sprites:{other:{dream_world:{front_default}}}} = data;
    const [hp,attack,defense,speciala,speciald,speed] = stats;

    
  return {hp,attack,defense,speciala,speciald,speed,id,name,weight,front_default};
}


export const pokemonApi = async(pokemon = "") => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const data = await resp.json();

  return data;
}

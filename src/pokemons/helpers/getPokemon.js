
//obtener nombre + id
export const getPokemon = async(pokemon) =>{

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const resp = await fetch(url);
    const dataNi = await resp.json();
    const {id,name,sprites:{other:{dream_world:{front_default}}}} = dataNi;

    return [{id,name,front_default}]
}                    
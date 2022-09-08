
// obtener nombre + url de datos

export const getPokemonList = async(info) =>{

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${info}`
    const resp = await fetch(url);
    const dataList = await resp.json();
    console.log("datalist",dataList)
    return dataList;
}


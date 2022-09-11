

export const getPokemonByUrl = async(url) =>{
    
    const resp = await fetch(url);
    const dataUrl = await resp.json();
    const {id,name,sprites:{other:{"official-artwork":{front_default}}}} = dataUrl;
    
    return {id,name,front_default}
}

export const getWhoThatPokemon = async(pokemon)=>{

    const urlPoke = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resp = await fetch(urlPoke);
    const dataNi = await resp.json();

    return dataNi;
}

export const getDateApiList = (results) => {
    
    const valores = Promise.all(
            results.map(async(res)=>{
                return await getPokemonByUrl(res.url)
            })
        )
    return valores;
}

export const getPokemonList = async(url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0" ) =>{

    const resp = await fetch(url);
    const dataList = await resp.json();

    const {next,previous,results} = dataList;

    return {next,previous,results};
}
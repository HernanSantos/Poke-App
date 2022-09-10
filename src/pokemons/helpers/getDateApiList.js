

export const getPokemonByUrl = async(url) =>{
    
    
    const resp = await fetch(url);
    const dataUrl = await resp.json();
    const {id,name,sprites:{other:{"official-artwork":{front_default}}}} = dataUrl;
    
    return {id,name,front_default}
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

    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${initialState}`
    const resp = await fetch(url);
    const dataList = await resp.json();

    const {next,previous,results} = dataList;

    return {next,previous,results};
}
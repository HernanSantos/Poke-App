
    
    // obtener nombre + url de datos
    export const getPokemonList = async(info) =>{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${info}`
        const resp = await fetch(url);
        const dataList = await resp.json();
        
        //console.log("getpokemonlist",data)
        return dataList;

        // const promesa = await Promise.all(
        //     results.map(async(res)=>{
        //         return await pokemonApi(res.name)
        //     })
        // ) 
    }

    //obtener nombre + id
    export const getPokemon = async(pokemon) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const resp = await fetch(url);
        const dataNi = await resp.json();
        const {id,name,sprites:{other:{dream_world:{front_default}}}} = dataNi;

        console.log("getpokemon",id,name,front_default)
        return [{id,name,front_default}]
    }

    export const getPokemonByUrl = async(url) =>{
        const resp = await fetch(url);
        const dataUrl = await resp.json();
        const {id,name,sprites:{other:{dream_world:{front_default}}}} = dataUrl;

        return {id,name,front_default}
    }



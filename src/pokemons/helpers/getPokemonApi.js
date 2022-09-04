
    
    // obtener nombre + url de datos
    export const getPokemonList = async(info) =>{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${info}`
        const resp = await fetch(url);
        const data = await resp.json();
        
        //console.log("getpokemonlist",data)
        return data;

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
        const data = await resp.json();

        //console.log("getpokemon",data)
        
    }

    export const getPokemonByUrl = async(url) =>{
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(typeof(data))
        const {id,name,sprites:{other:{dream_world:{front_default}}}} = data;

        return {id,name,front_default}
    }



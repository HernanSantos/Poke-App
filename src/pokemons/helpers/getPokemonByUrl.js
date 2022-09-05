
//obtener nombre + id por url

export const getPokemonByUrl = async(url) =>{
    
    const resp = await fetch(url);
    const dataUrl = await resp.json();
    const {id,name,sprites:{other:{dream_world:{front_default}}}} = dataUrl;

    return {id,name,front_default}
}

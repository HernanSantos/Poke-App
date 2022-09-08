//genero pokemon

export const female = async(name)=>{
    const url = `https://pokeapi.co/api/v2/gender/1`;
    const resp = await fetch(url);
    const {pokemon_species_details} = await resp.json();

    const genderF = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
    return genderF;
}

export const male = async(name)=>{
    const url = `https://pokeapi.co/api/v2/gender/2`;
    const resp = await fetch(url);
    const {pokemon_species_details} = await resp.json();

    const genderM = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
    return genderM;
}

export const genderless = async(name)=>{
    const url = `https://pokeapi.co/api/v2/gender/3`;
    const resp = await fetch(url);
    const {pokemon_species_details} = await resp.json();

    const genderGl = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
    return genderGl;
}

export const pokeSpecie = async(pokemon)=>{
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
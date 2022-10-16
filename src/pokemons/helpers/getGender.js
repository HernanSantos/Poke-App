import { useEffect, useState } from "react";


export const getGender = (name) =>{
    const [gender, setGender] = useState([])

    const female = async(name)=>{
        const url = `https://pokeapi.co/api/v2/gender/1`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();
    
        if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
            setGender(value=>[...value, "Famale"])
        }
    }
    
    const male = async(name)=>{
        const url = `https://pokeapi.co/api/v2/gender/2`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();
    
        if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
            setGender(value=>[...value, "Male"])
        }
    }

    const genderless = async(name)=>{
        const url = `https://pokeapi.co/api/v2/gender/3`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();
    
        if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
            setGender(value=>[...value, "genderless"])
        }
    }

    useEffect(() => {
        female(name);
        male(name);
        genderless(name);
    }, [])

    return [gender]
}


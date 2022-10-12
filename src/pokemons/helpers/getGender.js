import { useEffect, useState } from "react";


export const getGender = (name) =>{
    const [gender, setGender] = useState([])

    useEffect(() => {
        const female = async(name)=>{
            const url = `https://pokeapi.co/api/v2/gender/1`;
            const resp = await fetch(url);
            const {pokemon_species_details} = await resp.json();
        
            if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
                setGender(value=>[...value, "Famale"])
            }
        }
        female(name);
    }, []);

    useEffect(() => {
        const male = async(name)=>{
            const url = `https://pokeapi.co/api/v2/gender/2`;
            const resp = await fetch(url);
            const {pokemon_species_details} = await resp.json();
        
            if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
                setGender(value=>[...value, "Male"])
            }
        }
        male(name);
    }, []);

    useEffect(() => {
        const genderless = async(name)=>{
            const url = `https://pokeapi.co/api/v2/gender/3`;
            const resp = await fetch(url);
            const {pokemon_species_details} = await resp.json();
        
            if (pokemon_species_details.find(gender => gender.pokemon_species.name === name)){
                setGender(value=>[...value, "genderless"])
            }
        }
        genderless(name);
    }, []);
    

    return [gender]
}

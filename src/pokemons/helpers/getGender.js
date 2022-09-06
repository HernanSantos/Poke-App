import { useEffect, useState } from "react";


export const getGender = (name) => {

    const female = async()=>{
        const url = `https://pokeapi.co/api/v2/gender/1`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();

        const genderF = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
        console.log("female",genderF)
    }

    const male = async()=>{
        const url = `https://pokeapi.co/api/v2/gender/2`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();

        const genderM = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
        console.log("male",genderM)
    }

    const genderless = async()=>{
        const url = `https://pokeapi.co/api/v2/gender/3`;
        const resp = await fetch(url);
        const {pokemon_species_details} = await resp.json();

        const genderGl = pokemon_species_details.find(gender => gender.pokemon_species.name === name)
        console.log("genderless",genderGl)
    }

    genderless();
    male();
    female();
  return ;
}

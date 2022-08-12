import React, { Component, useEffect, useState } from 'react';
import HomePageSection from '../components/HomePageSection';
import pokeMonInfo from '../pokedex.json';


const Home = () => {
    const [pokeMonData, setPokeMonData] = useState(pokeMonInfo);
    let data = [];
    let typeData = [];
    let weaknesses = [];
    let weaknessesData = [];
        pokeMonData.pokemon.forEach((p,i) => {
            p.type.forEach((t,i)=> {
                if(!data.includes(t)){
                    data.push(t);
                    typeData.push({name:t, img:p.img})
                }
            });
            
            p.weaknesses.forEach((w,i)=> {
                if(!weaknesses.includes(w)){
                    weaknesses.push(w);
                    weaknessesData.push({name:w, img:p.img})
                }
            });
        });
   

    const [pokeMonTypes, setPokeMonTypes] = useState(typeData.sort((a,b)=> { return a.name > b.name ? 1: b.name > a.name ? -1: 0}));
    const [pokeMonByWeakness, setPokeMonByWeakness] = useState(weaknessesData.sort((a,b)=> { return a.name > b.name ? 1: b.name > a.name ? -1: 0}));

    useEffect(()=> {
        
    //    console.log(pokeMonTypes);
      //s  setPokeMonTypes(data);
    }, []);

    return (
    <>
   
    { pokeMonTypes.length > 0 && <HomePageSection name="Pokemon by Types" data={pokeMonTypes} redirect="/type/"/> } 
    { pokeMonByWeakness.length > 0 && <HomePageSection name="Pokemon by Weakness" data={pokeMonByWeakness} redirect="/weakness/"/> }     
    </>
    );
}

export default Home;
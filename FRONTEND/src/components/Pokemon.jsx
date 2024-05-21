import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from './api';
import '../styles/home.scss';

function Pokemon() {
  const { pokemon } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      const data = await fetchPokemonDetails(pokemon).catch(err => console.error(err));
      setPokemonDetails(data);
    }

    loadPokemonDetails();
  }, [pokemon]);

  return (
    <>
    <section className='pokepage-container'>
      <h1>{pokemonDetails?.name}</h1>
      <img src={pokemonDetails?.sprites.front_default} alt={pokemonDetails?.name} />
      <p>Type(s): {pokemonDetails?.types.map(type => type.type.name).join(', ')}</p>
      <p>Stats: {pokemonDetails?.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
      <p>Abilities: {pokemonDetails?.abilities.map(ability => ability.ability.name).join(', ')}</p>
    </section>
    </>
  )
}

export default Pokemon;
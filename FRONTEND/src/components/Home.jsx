import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchTypes } from './api';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import Type from './Type'
import Pokemon from './Pokemon'

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setPokemons(await fetchPokemons());
      setTypes(await fetchTypes());
    };

    loadData();
  }, []);

  return (
    <>
      <section className="pokemon-container">
        <h2>Main Pokemons</h2>
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-item">
              <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              </Link>
            </div>
          ))}
      </section>
      <h2>Types</h2>
      <section className="types-container">
          {types.map((type) => (
            <div key={type.name} className="type-item">
              <Link to={`/types/${type.name}`}>{type.name}</Link>
            </div>
          ))}
      </section>
    </>
  );
}

export default Home;
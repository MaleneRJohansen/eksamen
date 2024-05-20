import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchTypes } from './api';
import { Link } from 'react-router-dom';
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
      <h1>Home</h1>
      <section>
        <h2>Main Pokemons</h2>
        <div className="grid-container main-pokemons-grid">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="grid-item">
              <Link to={`/pokemon/${pokemon.name}`}>
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Types</h2>
        <div className="grid-container types-grid">
          {types.map((type) => (
            <div key={type.name} className="grid-item">
              <Link to={`/types/${type.name}`}>{type.name}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
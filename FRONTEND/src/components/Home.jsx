import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchTypes } from './api';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
import '../styles/home.scss';
import '../assets/type_colors.scss';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setPokemons(await fetchPokemons());
      setTypes(await fetchTypes());
    }

    loadData();
  }, [])

  return (
    <>
      <h1>Home</h1>
      <SearchResult pokemons={pokemons}/>
      <section>
        <h2>Main Pokemons</h2>
        <section className="pokemon-container">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-item">
              <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
      <section>
        <h2>Types</h2>
        <section className="types-container">
          {types.map((type) => (
            <div key={type.name} className={`type-item ${type.name.toLowerCase()}`}>
              <Link to={`/types/${type.name}`}>{type.name}</Link>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default Home;
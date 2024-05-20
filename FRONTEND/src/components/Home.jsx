import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchTypes } from './api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { searchPokemons } from './searchFunction';
import Type from './Type'
import Pokemon from './Pokemon'

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      setPokemons(await fetchPokemons());
      setTypes(await fetchTypes());
    };

    loadData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchResult(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const foundPokemon = pokemons.find(pokemon => pokemon.name.toLowerCase() === searchResult.toLowerCase());
    if (foundPokemon) {
      navigate(`/pokemon/${foundPokemon.name}`);
    } else {
      alert('No Pokémon found with that name');
    }
  }

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder='Search for a Pokemon'
          value={searchResult}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
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
              <p>{type.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
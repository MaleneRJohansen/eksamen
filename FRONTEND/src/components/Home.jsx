import React, { useState, useEffect } from 'react';
import Type from './Type'
import Pokemon from './Pokemon'

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const responsePokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
        const dataPokemons = await responsePokemons.json();
        
        const pokemonDetails = await Promise.all(
          dataPokemons.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
          })
        );
        setPokemons(pokemonDetails);

        const responseTypes = await fetch('https://pokeapi.co/api/v2/type?limit=18');
        const dataTypes = await responseTypes.json();
        setTypes(dataTypes.results);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <section>
        <h2>Main Pokemons</h2>
        <div className="grid-container main-pokemons-grid">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="grid-item">
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
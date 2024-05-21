import React,  { useState } from 'react'
import { searchPokemons } from './searchFunction';

function SearchResult({pokemons}) {
  const [searchRes, setSearchRes] = useState("");
  const { searchForPokemon } = searchPokemons(pokemons);

  const handleSearchChange = (event) => {
    setSearchRes(event.target.value);
  }
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchForPokemon(searchRes); 
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for a Pokémon"
        value={searchRes}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchResult

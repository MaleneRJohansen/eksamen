import React,  { useState } from 'react'
import { searchPokemons } from './searchFunction';
import '../styles/search.scss'
//Søke-ikonet er hentet fra google fonts

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
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" fill="#333"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>Search</button>
    </form>
  )
}

export default SearchResult

import { useNavigate } from 'react-router-dom';

export const searchPokemons = (pokemons) => {
    const navigate = useNavigate();
    
    const searchForPokemon = (searchRes) => {
      const foundPokemon = pokemons.find(pokemon => pokemon.name.toLowerCase() === searchRes.toLowerCase());
    if (foundPokemon) {
      navigate(`/pokemon/${foundPokemon.name}`);
    } else {
      alert('No Pokémon found with that name');
    }
  }
    return {searchForPokemon};
}
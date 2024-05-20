export const searchPokemons = (pokemons, searchResult) => {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchResult.toLowerCase())
    );
  };
const fetchJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
  }
  
  export const fetchPokemons = async () => {
    const { results } = await fetchJSON('https://pokeapi.co/api/v2/pokemon?limit=9');
    return Promise.all(results.map(pokemon => fetchJSON(pokemon.url)));
  }
  
  export const fetchTypes = async () => {
    const { results } = await fetchJSON('https://pokeapi.co/api/v2/type?limit=18');
    return results;
  }
  
  export const fetchPokemonDetails = async (pokemon) => {
    return fetchJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }

  export const fetchTypeDetails = async (type) => {
    return fetchJSON(`https://pokeapi.co/api/v2/type/${type}`)
  }
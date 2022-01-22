import axios from 'axios';

const fetchPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return data;
};

export default {
  fetchPokemons,
};

import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import fetchPokemons from '../../services/api';

import Container from './styles';

function Outra() {
  const [pokemons, setpokemons] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const pokemons = async () => {
      setpokemons((await fetchPokemons()).results);
    };
    pokemons();
  }, []);

  return (
    <Container className="Container">
      { pokemons.map((pokemon) => (<h1>{pokemon.name}</h1>))}
    </Container>
  );
}

export default Outra;

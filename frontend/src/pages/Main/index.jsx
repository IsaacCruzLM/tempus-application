import React from 'react';

import Header from '../../components/Header';
import DataTable from '../../components/DataTable';

import Container from './styles';

const data = [
  {
    id: '1', nome: 'Isaac', cpf: 1231231231, dataDeNascimento: '1987-20-01', dataDeCadastro: '2021-20-01', rendaFamiliar: 200,
  },
  {
    id: '2', nome: 'Isaac 2', cpf: 1231231231, dataDeNascimento: '1987-20-01', dataDeCadastro: '2021-20-01', rendaFamiliar: 2000,
  },
  {
    id: '3', nome: 'Isaac 3', cpf: 1231231231, dataDeNascimento: '1987-20-01', dataDeCadastro: '2021-20-01', rendaFamiliar: 2600,
  },
  {
    id: '4', nome: 'Isaac 4', cpf: 1231231231, dataDeNascimento: '1987-20-01', dataDeCadastro: '2021-20-01', rendaFamiliar: 200,
  },
];

function Main() {
  return (
    <Container>
      <Header />
      <DataTable clients={data} />
    </Container>
  );
}

export default Main;

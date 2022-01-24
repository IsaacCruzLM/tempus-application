/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, InfoContainer, ClassContainer } from './styles';

function ReportCard({ clients }) {
  const currentYear = new Date().getFullYear();
  console.log(clients);

  const classifyClients = (classParam) => {
    if (classParam === 'Classe A') {
      return clients
        .filter(({ rendaFamiliar }) => rendaFamiliar <= 980)
        .length;
    }
    if (classParam === 'Classe B') {
      return clients
        .filter(({ rendaFamiliar }) => rendaFamiliar > 980 && rendaFamiliar <= 2500)
        .length;
    }
    return clients
      .filter(({ rendaFamiliar }) => rendaFamiliar > 2500)
      .length;
  };

  const rendaMedia = ((clients.map(({ rendaFamiliar }) => rendaFamiliar))
    .reduce((total, renda) => total + Number(renda), 0)) / (clients.length);

  const clientsMore18Years = ((clients
    .filter(({ dataDeNascimento }) => (currentYear - (new Date(dataDeNascimento).getFullYear())) > 17)));

  const clientsThatPassTheSpecifications = clientsMore18Years
    .filter(({ rendaFamiliar }) => (Number(rendaFamiliar)) > rendaMedia)
    .length;

  return (
    <Container>
      <InfoContainer>
        <h3>Número de Clientes maiores de 18 anos e com renda maior que a média</h3>
        <p>{clientsThatPassTheSpecifications}</p>
      </InfoContainer>
      <InfoContainer>
        <h3>Classificação dos Clientes</h3>
        <div>
          <ClassContainer>
            <h4>Classe A =</h4>
            <p>{classifyClients('Classe A')}</p>
          </ClassContainer>
          <ClassContainer>
            <h4>Classe B  = </h4>
            <p>{classifyClients('Classe B')}</p>
          </ClassContainer>
          <ClassContainer>
            <h4>Classe C  = </h4>
            <p>{classifyClients('Classe C')}</p>
          </ClassContainer>
        </div>
      </InfoContainer>
    </Container>
  );
}

ReportCard.propTypes = {
  clients: PropTypes.arrayOf(Object).isRequired,
};

export default ReportCard;

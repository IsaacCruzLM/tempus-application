/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Title, SubTitle, Button,
} from './styles';

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <SubTitle>Página Não Encontrada</SubTitle>
      <Link to="/login">
        <Button type="button">
          Voltar para página de Login
        </Button>
      </Link>
    </Container>
  );
}

export default NotFound;

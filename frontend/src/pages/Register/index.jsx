import React from 'react';

import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput/index';

import {
  Container, Form, Title, Button,
} from './styles';

function Register() {
  return (
    <Container className="Container">
      <Form action="" method="GET">
        <Title>
          Registrar
        </Title>

        <TextInput label="Insira seu Nome" name="nome" />

        <EmailInput label="Insira seu Email" name="email" />

        <PasswordInput label="Insira sua Senha" name="password" />

        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
}

export default Register;

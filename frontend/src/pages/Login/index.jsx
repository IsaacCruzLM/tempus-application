/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';

import {
  Container, Form, Title, Button,
} from './styles';

function Login() {
  return (
    <Container className="Container">
      <Form action="" method="GET">
        <Title>
          Login
        </Title>

        <EmailInput label="Email" name="email" />

        <PasswordInput label="Senha" name="password" />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;

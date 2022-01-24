/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router';

import api from '../../services/api';

import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';

import {
  Container, Form, Title, Button,
} from './styles';

function Login() {
  const [toRedirect, setToRedirect] = useState(false);
  const form = useRef();

  const loginAction = async (event) => {
    event.preventDefault();
    const email = form.current[0].value;
    const password = form.current[1].value;

    if (email === '') return alert.error('Por favor, insira um email');
    if (password === '') return alert.error('Por favor, insira um password');

    const response = await api.loginInApplication(email, password);

    if (!response.message) {
      localStorage.setItem('authorization', JSON.stringify(response.token));
      form.current.reset();
      return setToRedirect(true);
    }

    return alert(response.message);
  };

  if (toRedirect) return <Redirect to="/clientList" />;

  return (
    <Container className="Container">
      <Form ref={form} onSubmit={loginAction} action="" method="POST">
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

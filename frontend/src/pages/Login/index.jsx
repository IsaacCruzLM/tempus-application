/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Container, Form, Title, InputContainer, Input, Button, Label, SpanError,
} from './styles';

function Main() {
  return (
    <Container className="Container">
      <Form action="" method="GET">
        <Title>
          Login
        </Title>

        <InputContainer>
          <Label htmlFor="user">
            Email
            <Input required type="email" id="user" />
          </Label>
          <SpanError className="error" />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">
            Password
            <Input required type="password" id="email" />
          </Label>
          <SpanError className="error" />
        </InputContainer>

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Main;

import React from 'react';

import {
  Container, Form, Title, InputContainer, Input, Button, Label,
} from './styles';

function Main() {
  return (
    <Container className="Container">
      <Form action="" method="GET">
        <Title>
          Registrar
        </Title>

        <InputContainer>
          <Label htmlFor="user">
            Insira seu Nome
            <Input required type="text" name="nome" />
          </Label>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="user">
            Insira seu Email
            <Input required type="email" name="email" />
          </Label>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">
            Insira sua Senha
            <Input required type="password" name="password" />
          </Label>
        </InputContainer>

        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
}

export default Main;

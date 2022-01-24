/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Login from '../pages/Login';

describe('Testando a página Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('Testa se o componente possui o Título', () => {
    const title = screen.getByText('Login');
    expect(title).toBeInTheDocument();
  });

  test('Testa se o componente possui o campo email', () => {
    const Email = screen.getByText('Email');
    expect(Email).toBeInTheDocument();
  });

  test('Testa se o componente possui o campo Senha', () => {
    const Senha = screen.getByText('Senha');
    expect(Senha).toBeInTheDocument();
  });

  test('Testa se o componente possui o Botão para Agendar Demonstração', () => {
    const Button = screen.getByRole('button');
    expect(Button.textContent).toBe('Entrar');
  });
});

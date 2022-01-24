import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

import {
  HeaderComponent,
  Title,
  HeaderButtons,
  ButtonContainer,
  ModalHeader,
  ModalSubtitle,
  ModalForm,
  Button,
} from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const form = useRef();

  const regiterClient = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem('authorization'));
    const nome = form.current[0].value;
    const cpf = Number(form.current[1].value);
    const dataDeNascimento = form.current[2].value;
    const rendaFamiliar = Number(form.current[3].value) || 0;

    if (nome === '') return alert.error('Por favor, insira um email');
    if (cpf === '') return alert.error('Por favor, insira um password');
    if (dataDeNascimento === '') return alert.error('Por favor, insira um password');

    const response = await api.registerClient(token, nome, cpf, dataDeNascimento, rendaFamiliar);

    if (!response.message) {
      form.current.reset();
      return window.location.reload();
    }

    return alert(response.message);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <HeaderComponent>
      <Title>
        Tempus
      </Title>
      <HeaderButtons>
        {
          pathname === '/clientList'
          && (
          <ButtonContainer>
            <button onClick={openModal} type="button">
              Adicionar Cliente
            </button>
          </ButtonContainer>
          )
        }
        {
          pathname === '/clientList'
          && (
          <ButtonContainer>
            <Link to="/report">
              <button type="button">
                Gerar Relátorios
              </button>
            </Link>
          </ButtonContainer>
          )
        }
        {
          pathname === '/report'
          && (
          <ButtonContainer>
            <Link to="/clientList">
              <button type="button">
                Ir para Lista de Clientes
              </button>
            </Link>
          </ButtonContainer>
          )
        }
      </HeaderButtons>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cadastrar Novo Cliente"
      >
        <ModalHeader>
          <h2>Cadastrar Novo Cliente</h2>
          <button type="button" onClick={closeModal}>Close</button>
        </ModalHeader>
        <ModalSubtitle>Insira as Informações do Novo Cliente</ModalSubtitle>
        <ModalForm ref={form} onSubmit={regiterClient}>
          <input type="text" required maxLength="150" placeholder="Nome" />
          <input type="number" required maxLength="10" placeholder="CPF" />
          <input type="date" required placeholder="Data de nascimento" />
          <input type="number" placeholder="Renda familiar" />
          <Button type="submit">Cadastrar Cliente</Button>
        </ModalForm>
      </Modal>
    </HeaderComponent>
  );
}

export default Header;

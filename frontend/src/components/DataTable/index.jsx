import React, { useState, useRef } from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import api from '../../services/api';
import Bagde from '../Badge';

import {
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

function DataTable({ clients }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clientToUpdate, setClientToUpdate] = useState({});

  const form = useRef();

  const token = JSON.parse(localStorage.getItem('authorization'));

  const editClient = async (event) => {
    event.preventDefault();
    const { id } = clientToUpdate;
    const nome = form.current[0].value || clientToUpdate.nome;
    const cpf = Number(form.current[1].value) || clientToUpdate.cpf;
    const dataDeNascimento = form.current[2].value || clientToUpdate.dataDeNascimento;
    const rendaFamiliar = Number(form.current[3].value) || clientToUpdate.rendaFamiliar;

    if (nome === '') return alert.error('Por favor, insira um nome');
    if (cpf === '') return alert.error('Por favor, insira um cpf');
    if (dataDeNascimento === '') return alert.error('Por favor, insira uma data de nascimento');

    const response = await api.updateClient(token, id, nome, cpf, dataDeNascimento, rendaFamiliar);

    if (!response.message) {
      form.current.reset();
      return window.location.reload();
    }

    return alert(response.message);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ maxWidth: '100%', padding: '0.8rem' }}>
      <MaterialTable
        columns={[
          {
            title: 'Identificação', field: 'id', align: 'left', hidden: true,
          },
          { title: 'Nome', field: 'nome', align: 'left' },
          {
            title: 'CPF', field: 'cpf', type: 'numeric', align: 'left',
          },
          {
            title: 'Data de Nascimento', field: 'dataDeNascimento', type: 'date', align: 'left',
          },
          {
            title: 'Data de Cadastro', field: 'dataDeCadastro', type: 'date', align: 'left',
          },
          {
            title: 'Renda Familiar',
            field: 'rendaFamiliar',
            align: 'center',
            render: (rowData) => (
              <div>
                <Bagde renda={rowData.rendaFamiliar} />
              </div>
            ),
          },
        ]}
        data={clients}
        title="Clientes"
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Cliente',
            onClick: (event, rowData) => {
              setClientToUpdate(rowData);
              return setIsOpen(true);
            },
          },
          {
            icon: 'delete',
            tooltip: 'Delete Cliente',
            onClick: async (event, rowData) => {
              const response = await api.deleteClient(token, rowData.id);
              if (!response.message) return window.location.reload();
              return alert(response.message);
            },
          },
        ]}
      />
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
        <ModalForm ref={form} onSubmit={editClient}>
          <input type="text" required maxLength="150" placeholder="Nome" />
          <input type="number" maxLength="10" placeholder="CPF" />
          <input type="date" placeholder="Data de nascimento" />
          <input type="number" placeholder="Renda familiar" />
          <Button type="submit">Editar Cliente</Button>
        </ModalForm>
      </Modal>
    </div>
  );
}

DataTable.propTypes = {
  clients: PropTypes.arrayOf(Object).isRequired,
};

export default DataTable;

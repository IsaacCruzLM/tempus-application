import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

import Bagde from '../Badge';

import {

} from './styles';

function DataTable({ clients }) {
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
            onClick: (event, rowData) => alert(`You saved ${rowData.nome}`),
          },
          {
            icon: 'delete',
            tooltip: 'Delete Cliente',
            onClick: (event, rowData) => alert(`You saved ${rowData.id}`),
          },
        ]}
      />
    </div>
  );
}

DataTable.propTypes = {
  clients: PropTypes.arrayOf(Object).isRequired,
};

export default DataTable;

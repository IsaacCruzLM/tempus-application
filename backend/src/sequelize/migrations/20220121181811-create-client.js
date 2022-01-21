module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dataDeNascimento: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'data_de_nascimento',
      },
      dataDeCadastro: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'data_de_cadastro',
      },
      rendaFamiliar: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'renda_familiar',
      },
      userId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Clients');
  },
};

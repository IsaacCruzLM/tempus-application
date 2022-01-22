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
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.INTEGER,
      },
      dataDeNascimento: {
        type: Sequelize.DATE,
        field: 'data_de_nascimento',
      },
      dataDeCadastro: {
        type: Sequelize.DATE,
        field: 'data_de_cadastro',
      },
      rendaFamiliar: {
        type: Sequelize.FLOAT,
        field: 'renda_familiar',
      },
      userId: {
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

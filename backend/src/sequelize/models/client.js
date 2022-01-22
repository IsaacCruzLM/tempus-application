module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'Client',
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.INTEGER,
      dataDeNascimento: DataTypes.DATE,
      dataDeCadastro: DataTypes.DATE,
      rendaFamiliar: DataTypes.FLOAT,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'Clients',
      underscored: true,
    },
  );

  Client.associate = (models) => {
    Client.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Client;
};

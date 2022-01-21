module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: true,
    },
  );

  User.associate = (models) => {
    User.hasMany(
      models.Client,
      { as: 'clients', foreignKey: 'userId' },
    );
  };

  return User;
};

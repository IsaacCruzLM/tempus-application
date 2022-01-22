module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        nome: 'Administrador',
        email: 'admin@gmail.com',
        password: 'admin123',
      },
    ],
    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Clients',
    [
      {
        id: 1,
        nome: 'Cliente Teste 1',
        cpf: 123456789,
        data_de_nascimento: new Date('2011-08-01T19:58:00.000Z'),
        data_de_cadastro: new Date(),
        renda_familiar: 2500,
        user_id: 1,
      },
      {
        id: 2,
        nome: 'Cliente Teste 2',
        cpf: 123123123,
        data_de_nascimento: new Date('2012-08-01T19:58:00.000Z'),
        data_de_cadastro: new Date(),
        renda_familiar: 2000,
        user_id: 1,
      },
    ],
    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Clients', null, {}),
};

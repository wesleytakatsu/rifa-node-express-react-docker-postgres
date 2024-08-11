const faker = require('faker');
const { Compra, User } = require('../models');

const createCompra = async (overrides = {}) => {
  const user = overrides.id_user || (await User.findOne());

  const compraData = {
    id_user: user.id,
    valor_total: faker.datatype.float({ min: 10, max: 1000 }),
    data_pagamento: faker.date.past(),
    pago: faker.datatype.boolean(),
    ...overrides,
  };

  return Compra.create(compraData);
};

module.exports = {
  createCompra,
};

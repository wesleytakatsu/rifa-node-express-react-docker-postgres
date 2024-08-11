const faker = require('faker');
const { Rifa } = require('../models');

const createRifa = async (overrides = {}) => {
  const rifaData = {
    quant_numeros: faker.datatype.number({ min: 10, max: 100 }),
    quant_sorteados: faker.datatype.number({ min: 0, max: 10 }),
    valor_cota: faker.datatype.float({ min: 1, max: 100 }),
    premio: faker.datatype.number({ min: 1000, max: 10000 }),
    data_sorteio: faker.date.future(),
    executado: faker.datatype.boolean(),
    ...overrides,
  };

  return Rifa.create(rifaData);
};

module.exports = {
  createRifa,
};

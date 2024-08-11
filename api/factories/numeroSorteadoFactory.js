const faker = require('faker');
const { NumeroSorteado, Rifa } = require('../models');

const createNumeroSorteado = async (overrides = {}) => {
  const rifa = overrides.id_rifa || (await Rifa.findOne());

  const numeroSorteadoData = {
    id_rifa: rifa.id,
    numero_sorteado: faker.datatype.number({ min: 1, max: rifa.quant_numeros }),
    ...overrides,
  };

  return NumeroSorteado.create(numeroSorteadoData);
};

module.exports = {
  createNumeroSorteado,
};

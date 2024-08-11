const faker = require('faker');
const { CompraItem, Compra, Rifa } = require('../models');

const createCompraItem = async (overrides = {}) => {
  const compra = overrides.id_compra || (await Compra.findOne());
  const rifa = overrides.id_rifa || (await Rifa.findOne());

  const compraItemData = {
    id_compra: compra.id,
    id_rifa: rifa.id,
    quantos_numeros: faker.datatype.number({ min: 1, max: 10 }),
    valor_item: faker.datatype.float({ min: 1, max: 100 }),
    ...overrides,
  };

  return CompraItem.create(compraItemData);
};

module.exports = {
  createCompraItem,
};

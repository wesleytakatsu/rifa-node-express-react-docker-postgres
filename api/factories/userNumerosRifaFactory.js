const faker = require('faker');
const { UserNumerosRifa, User, Rifa } = require('../models');

const createUserNumerosRifa = async (overrides = {}) => {
  const user = overrides.id_user || (await User.findOne());
  const rifa = overrides.id_rifa || (await Rifa.findOne());

  const userNumerosRifaData = {
    id_user: user.id,
    id_rifa: rifa.id,
    numero_escolhido: faker.datatype.number({ min: 1, max: rifa.quant_numeros }),
    ...overrides,
  };

  return UserNumerosRifa.create(userNumerosRifaData);
};

module.exports = {
  createUserNumerosRifa,
};

const faker = require('faker');
const { User } = require('../models');

const createUser = async (overrides = {}) => {
  const userData = {
    email: faker.internet.email(),
    cpf: faker.random.alphaNumeric(11),
    password: faker.internet.password(),
    whatsapp: faker.phone.phoneNumber('###########'),
    ...overrides,
  };

  return User.create(userData);
};

module.exports = {
  createUser,
};

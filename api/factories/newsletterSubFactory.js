const faker = require('faker');
const { NewsletterSub } = require('../models');

const createNewsletterSub = async (overrides = {}) => {
  const newsletterSubData = {
    email: faker.internet.email(),
    ...overrides,
  };

  return NewsletterSub.create(newsletterSubData);
};

module.exports = {
  createNewsletterSub,
};

const { NewsletterSub } = require('../models');

const createNewsletterSub = async (req, res) => {
  try {
    const newsletterSub = await NewsletterSub.create(req.body);
    res.status(201).json(newsletterSub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllNewsletterSubs = async (req, res) => {
  try {
    const newsletterSubs = await NewsletterSub.findAll();
    res.status(200).json(newsletterSubs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getNewsletterSubById = async (req, res) => {
  try {
    const newsletterSub = await NewsletterSub.findByPk(req.params.id);
    if (!newsletterSub) return res.status(404).json({ error: 'Subscription not found' });
    res.status(200).json(newsletterSub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNewsletterSub = async (req, res) => {
  try {
    const newsletterSub = await NewsletterSub.findByPk(req.params.id);
    if (!newsletterSub) return res.status(404).json({ error: 'Subscription not found' });
    await newsletterSub.update(req.body);
    res.status(200).json(newsletterSub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNewsletterSub = async (req, res) => {
  try {
    const newsletterSub = await NewsletterSub.findByPk(req.params.id);
    if (!newsletterSub) return res.status(404).json({ error: 'Subscription not found' });
    await newsletterSub.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNewsletterSub,
  getAllNewsletterSubs,
  getNewsletterSubById,
  updateNewsletterSub,
  deleteNewsletterSub,
};

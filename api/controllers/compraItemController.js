const { CompraItem } = require('../models');

const createCompraItem = async (req, res) => {
  try {
    const compraItem = await CompraItem.create(req.body);
    res.status(201).json(compraItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCompraItens = async (req, res) => {
  try {
    const compraItens = await CompraItem.findAll();
    res.status(200).json(compraItens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCompraItemById = async (req, res) => {
  try {
    const compraItem = await CompraItem.findByPk(req.params.id);
    if (!compraItem) return res.status(404).json({ error: 'CompraItem not found' });
    res.status(200).json(compraItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCompraItem = async (req, res) => {
  try {
    const compraItem = await CompraItem.findByPk(req.params.id);
    if (!compraItem) return res.status(404).json({ error: 'CompraItem not found' });
    await compraItem.update(req.body);
    res.status(200).json(compraItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCompraItem = async (req, res) => {
  try {
    const compraItem = await CompraItem.findByPk(req.params.id);
    if (!compraItem) return res.status(404).json({ error: 'CompraItem not found' });
    await compraItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCompraItem,
  getAllCompraItens,
  getCompraItemById,
  updateCompraItem,
  deleteCompraItem,
};

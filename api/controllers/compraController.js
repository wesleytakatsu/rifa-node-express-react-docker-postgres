const { Compra } = require('../models');

const createCompra = async (req, res) => {
  try {
    const compra = await Compra.create(req.body);
    res.status(201).json(compra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.status(200).json(compras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (!compra) return res.status(404).json({ error: 'Compra not found' });
    res.status(200).json(compra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCompra = async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (!compra) return res.status(404).json({ error: 'Compra not found' });
    await compra.update(req.body);
    res.status(200).json(compra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCompra = async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (!compra) return res.status(404).json({ error: 'Compra not found' });
    await compra.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCompra,
  getAllCompras,
  getCompraById,
  updateCompra,
  deleteCompra,
};

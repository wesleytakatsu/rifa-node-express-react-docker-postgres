const { Rifa } = require('../models');

const createRifa = async (req, res) => {
  try {
    const rifa = await Rifa.create(req.body);
    res.status(201).json(rifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllRifas = async (req, res) => {
  try {
    const rifas = await Rifa.findAll();
    res.status(200).json(rifas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRifaById = async (req, res) => {
  try {
    const rifa = await Rifa.findByPk(req.params.id);
    if (!rifa) return res.status(404).json({ error: 'Rifa not found' });
    res.status(200).json(rifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRifa = async (req, res) => {
  try {
    const rifa = await Rifa.findByPk(req.params.id);
    if (!rifa) return res.status(404).json({ error: 'Rifa not found' });
    await rifa.update(req.body);
    res.status(200).json(rifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRifa = async (req, res) => {
  try {
    const rifa = await Rifa.findByPk(req.params.id);
    if (!rifa) return res.status(404).json({ error: 'Rifa not found' });
    await rifa.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRifa,
  getAllRifas,
  getRifaById,
  updateRifa,
  deleteRifa,
};

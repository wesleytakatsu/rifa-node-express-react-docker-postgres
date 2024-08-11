const { UserNumerosRifa } = require('../models');

const createUserNumerosRifa = async (req, res) => {
  try {
    const userNumerosRifa = await UserNumerosRifa.create(req.body);
    res.status(201).json(userNumerosRifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUserNumerosRifas = async (req, res) => {
  try {
    const userNumerosRifas = await UserNumerosRifa.findAll();
    res.status(200).json(userNumerosRifas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserNumerosRifaById = async (req, res) => {
  try {
    const userNumerosRifa = await UserNumerosRifa.findByPk(req.params.id);
    if (!userNumerosRifa) return res.status(404).json({ error: 'UserNumerosRifa not found' });
    res.status(200).json(userNumerosRifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserNumerosRifa = async (req, res) => {
  try {
    const userNumerosRifa = await UserNumerosRifa.findByPk(req.params.id);
    if (!userNumerosRifa) return res.status(404).json({ error: 'UserNumerosRifa not found' });
    await userNumerosRifa.update(req.body);
    res.status(200).json(userNumerosRifa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserNumerosRifa = async (req, res) => {
  try {
    const userNumerosRifa = await UserNumerosRifa.findByPk(req.params.id);
    if (!userNumerosRifa) return res.status(404).json({ error: 'UserNumerosRifa not found' });
    await userNumerosRifa.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserNumerosRifa,
  getAllUserNumerosRifas,
  getUserNumerosRifaById,
  updateUserNumerosRifa,
  deleteUserNumerosRifa,
};

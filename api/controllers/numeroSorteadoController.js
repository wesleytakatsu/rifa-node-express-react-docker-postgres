const { NumeroSorteado } = require('../models');

const createNumeroSorteado = async (req, res) => {
  try {
    const numeroSorteado = await NumeroSorteado.create(req.body);
    res.status(201).json(numeroSorteado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllNumerosSorteados = async (req, res) => {
  try {
    const numerosSorteados = await NumeroSorteado.findAll();
    res.status(200).json(numerosSorteados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getNumeroSorteadoById = async (req, res) => {
  try {
    const numeroSorteado = await NumeroSorteado.findByPk(req.params.id);
    if (!numeroSorteado) return res.status(404).json({ error: 'Numero Sorteado not found' });
    res.status(200).json(numeroSorteado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNumeroSorteado = async (req, res) => {
  try {
    const numeroSorteado = await NumeroSorteado.findByPk(req.params.id);
    if (!numeroSorteado) return res.status(404).json({ error: 'Numero Sorteado not found' });
    await numeroSorteado.update(req.body);
    res.status(200).json(numeroSorteado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNumeroSorteado = async (req, res) => {
  try {
    const numeroSorteado = await NumeroSorteado.findByPk(req.params.id);
    if (!numeroSorteado) return res.status(404).json({ error: 'Numero Sorteado not found' });
    await numeroSorteado.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNumeroSorteado,
  getAllNumerosSorteados,
  getNumeroSorteadoById,
  updateNumeroSorteado,
  deleteNumeroSorteado,
};

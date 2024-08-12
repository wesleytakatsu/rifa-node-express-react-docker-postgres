const express = require('express');
const { body, param } = require('express-validator');
const rifaController = require('../controllers/rifaController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', [
  authMiddleware, // Verifica se o usuário está autenticado
  body('quant_numeros').isInt({ min: 1 }).withMessage('Precisa ter pelo menos 1 número'),
  body('valor_cota').isFloat({ min: 0.1 }).withMessage('Precisa ser um valor positivo'),
  body('premio').isInt({ min: 1 }).withMessage('Precisa ser um valor positivo'),
  body('data_sorteio').isISO8601().withMessage('Precisa ser uma data válida'),
  body('quant_sorteados').isInt({ min: 1 }).withMessage('Precisa ter pelo menos 1 número'),
], rifaController.createRifa);

router.get('/', rifaController.getAllRifas);
router.get('/:id', param('id').isInt(), rifaController.getRifaById);
router.put('/:id', [
  authMiddleware,
  param('id').isInt(),
  body('quant_numeros').optional().isInt({ min: 1 }),
  body('valor_cota').optional().isFloat({ min: 0.1 }),
  body('premio').optional().isInt({ min: 1 }),
  body('data_sorteio').optional().isISO8601()
], rifaController.updateRifa);
router.delete('/:id', authMiddleware, param('id').isInt(), rifaController.deleteRifa);

module.exports = router;

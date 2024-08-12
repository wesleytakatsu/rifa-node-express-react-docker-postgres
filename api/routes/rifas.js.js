const express = require('express');
const { body, param } = require('express-validator');
const rifaController = require('../controllers/rifaController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/rifas', [
  authMiddleware, // Verifica se o usuário está autenticado
  body('quant_numeros').isInt({ min: 1 }).withMessage('Must be at least 1 number'),
  body('valor_cota').isFloat({ min: 0.1 }).withMessage('Must be a positive value'),
  body('premio').isInt({ min: 1 }).withMessage('Must be a positive number'),
  body('data_sorteio').isISO8601().withMessage('Must be a valid date')
], rifaController.createRifa);

router.get('/rifas', rifaController.getAllRifas);
router.get('/rifas/:id', param('id').isInt(), rifaController.getRifaById);
router.put('/rifas/:id', [
  authMiddleware,
  param('id').isInt(),
  body('quant_numeros').optional().isInt({ min: 1 }),
  body('valor_cota').optional().isFloat({ min: 0.1 }),
  body('premio').optional().isInt({ min: 1 }),
  body('data_sorteio').optional().isISO8601()
], rifaController.updateRifa);
router.delete('/rifas/:id', authMiddleware, param('id').isInt(), rifaController.deleteRifa);

module.exports = router;

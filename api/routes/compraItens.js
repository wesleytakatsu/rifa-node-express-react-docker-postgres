const express = require('express');
const { body, param } = require('express-validator');
const compraItemController = require('../controllers/compraItemController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/compra-itens', [
  authMiddleware,
  body('id_compra').isInt().withMessage('Must be a valid Compra ID'),
  body('id_rifa').isInt().withMessage('Must be a valid Rifa ID'),
  body('quantos_numeros').isInt({ min: 1 }).withMessage('Must be at least 1 number'),
  body('valor_item').isFloat({ min: 0.1 }).withMessage('Must be a positive value')
], compraItemController.createCompraItem);

router.get('/compra-itens', authMiddleware, compraItemController.getAllCompraItens);
router.get('/compra-itens/:id', authMiddleware, param('id').isInt(), compraItemController.getCompraItemById);
router.put('/compra-itens/:id', [
  authMiddleware,
  param('id').isInt(),
  body('id_compra').optional().isInt(),
  body('id_rifa').optional().isInt(),
  body('quantos_numeros').optional().isInt({ min: 1 }),
  body('valor_item').optional().isFloat({ min: 0.1 })
], compraItemController.updateCompraItem);
router.delete('/compra-itens/:id', authMiddleware, param('id').isInt(), compraItemController.deleteCompraItem);

module.exports = router;

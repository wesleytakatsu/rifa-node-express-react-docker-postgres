const express = require('express');
const { body, param } = require('express-validator');
const compraController = require('../controllers/compraController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/compras', [
  authMiddleware,
  body('id_user').isInt().withMessage('Must be a valid User ID'),
  body('valor_total').isFloat({ min: 0.1 }).withMessage('Must be a positive value'),
  body('data_pagamento').isISO8601().withMessage('Must be a valid date')
], compraController.createCompra);

router.get('/compras', authMiddleware, compraController.getAllCompras);
router.get('/compras/:id', authMiddleware, param('id').isInt(), compraController.getCompraById);
router.put('/compras/:id', [
  authMiddleware,
  param('id').isInt(),
  body('id_user').optional().isInt(),
  body('valor_total').optional().isFloat({ min: 0.1 }),
  body('data_pagamento').optional().isISO8601()
], compraController.updateCompra);
router.delete('/compras/:id', authMiddleware, param('id').isInt(), compraController.deleteCompra);

module.exports = router;

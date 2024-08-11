const express = require('express');
const { body, param, validationResult } = require('express-validator');

// Importando os controllers
const userController = require('../controllers/userController');
const newsletterSubController = require('../controllers/newsletterSubController');
const rifaController = require('../controllers/rifaController');
const numeroSorteadoController = require('../controllers/numeroSorteadoController');
const userNumerosRifaController = require('../controllers/userNumerosRifaController');
const compraController = require('../controllers/compraController');
const compraItemController = require('../controllers/compraItemController');

// Criando o roteador
const router = express.Router();

// Middleware para tratar erros de validação
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validações e Rotas para `User`
router.post('/users', [
  body('email').isEmail().withMessage('Invalid email'),
  body('cpf').isLength({ min: 11, max: 11 }).withMessage('CPF must be 11 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('whatsapp').isNumeric().withMessage('Whatsapp must be a number')
], validateRequest, userController.createUser);

router.get('/users', userController.getAllUsers);
router.get('/users/:id', param('id').isInt(), validateRequest, userController.getUserById);
router.put('/users/:id', [
  param('id').isInt(),
  body('email').optional().isEmail(),
  body('cpf').optional().isLength({ min: 11, max: 11 }),
  body('password').optional().isLength({ min: 6 }),
  body('whatsapp').optional().isNumeric()
], validateRequest, userController.updateUser);
router.delete('/users/:id', param('id').isInt(), validateRequest, userController.deleteUser);

// Validações e Rotas para `NewsletterSub`
router.post('/newsletter-subs', [
  body('email').isEmail().withMessage('Invalid email')
], validateRequest, newsletterSubController.createNewsletterSub);

router.get('/newsletter-subs', newsletterSubController.getAllNewsletterSubs);
router.get('/newsletter-subs/:id', param('id').isInt(), validateRequest, newsletterSubController.getNewsletterSubById);
router.put('/newsletter-subs/:id', [
  param('id').isInt(),
  body('email').optional().isEmail()
], validateRequest, newsletterSubController.updateNewsletterSub);
router.delete('/newsletter-subs/:id', param('id').isInt(), validateRequest, newsletterSubController.deleteNewsletterSub);

// Validações e Rotas para `Rifa`
router.post('/rifas', [
  body('quant_numeros').isInt({ min: 1 }).withMessage('Must be at least 1 number'),
  body('valor_cota').isFloat({ min: 0.1 }).withMessage('Must be a positive value'),
  body('premio').isInt({ min: 1 }).withMessage('Must be a positive number'),
  body('data_sorteio').isISO8601().withMessage('Must be a valid date')
], validateRequest, rifaController.createRifa);

router.get('/rifas', rifaController.getAllRifas);
router.get('/rifas/:id', param('id').isInt(), validateRequest, rifaController.getRifaById);
router.put('/rifas/:id', [
  param('id').isInt(),
  body('quant_numeros').optional().isInt({ min: 1 }),
  body('valor_cota').optional().isFloat({ min: 0.1 }),
  body('premio').optional().isInt({ min: 1 }),
  body('data_sorteio').optional().isISO8601()
], validateRequest, rifaController.updateRifa);
router.delete('/rifas/:id', param('id').isInt(), validateRequest, rifaController.deleteRifa);

// Validações e Rotas para `NumeroSorteado`
router.post('/numeros-sorteados', [
  body('id_rifa').isInt().withMessage('Must be a valid Rifa ID'),
  body('numero_sorteado').isInt({ min: 1 }).withMessage('Must be a valid number')
], validateRequest, numeroSorteadoController.createNumeroSorteado);

router.get('/numeros-sorteados', numeroSorteadoController.getAllNumerosSorteados);
router.get('/numeros-sorteados/:id', param('id').isInt(), validateRequest, numeroSorteadoController.getNumeroSorteadoById);
router.put('/numeros-sorteados/:id', [
  param('id').isInt(),
  body('id_rifa').optional().isInt(),
  body('numero_sorteado').optional().isInt({ min: 1 })
], validateRequest, numeroSorteadoController.updateNumeroSorteado);
router.delete('/numeros-sorteados/:id', param('id').isInt(), validateRequest, numeroSorteadoController.deleteNumeroSorteado);

// Validações e Rotas para `UserNumerosRifa`
router.post('/user-numeros-rifa', [
  body('id_user').isInt().withMessage('Must be a valid User ID'),
  body('id_rifa').isInt().withMessage('Must be a valid Rifa ID'),
  body('numero_escolhido').isInt({ min: 1 }).withMessage('Must be a valid number')
], validateRequest, userNumerosRifaController.createUserNumerosRifa);

router.get('/user-numeros-rifa', userNumerosRifaController.getAllUserNumerosRifas);
router.get('/user-numeros-rifa/:id', param('id').isInt(), validateRequest, userNumerosRifaController.getUserNumerosRifaById);
router.put('/user-numeros-rifa/:id', [
  param('id').isInt(),
  body('id_user').optional().isInt(),
  body('id_rifa').optional().isInt(),
  body('numero_escolhido').optional().isInt({ min: 1 })
], validateRequest, userNumerosRifaController.updateUserNumerosRifa);
router.delete('/user-numeros-rifa/:id', param('id').isInt(), validateRequest, userNumerosRifaController.deleteUserNumerosRifa);

// Validações e Rotas para `Compra`
router.post('/compras', [
  body('id_user').isInt().withMessage('Must be a valid User ID'),
  body('valor_total').isFloat({ min: 0.1 }).withMessage('Must be a positive value'),
  body('data_pagamento').isISO8601().withMessage('Must be a valid date')
], validateRequest, compraController.createCompra);

router.get('/compras', compraController.getAllCompras);
router.get('/compras/:id', param('id').isInt(), validateRequest, compraController.getCompraById);
router.put('/compras/:id', [
  param('id').isInt(),
  body('id_user').optional().isInt(),
  body('valor_total').optional().isFloat({ min: 0.1 }),
  body('data_pagamento').optional().isISO8601()
], validateRequest, compraController.updateCompra);
router.delete('/compras/:id', param('id').isInt(), validateRequest, compraController.deleteCompra);

// Validações e Rotas para `CompraItem`
router.post('/compra-itens', [
  body('id_compra').isInt().withMessage('Must be a valid Compra ID'),
  body('id_rifa').isInt().withMessage('Must be a valid Rifa ID'),
  body('quantos_numeros').isInt({ min: 1 }).withMessage('Must be at least 1 number'),
  body('valor_item').isFloat({ min: 0.1 }).withMessage('Must be a positive value')
], validateRequest, compraItemController.createCompraItem);

router.get('/compra-itens', compraItemController.getAllCompraItens);
router.get('/compra-itens/:id', param('id').isInt(), validateRequest, compraItemController.getCompraItemById);
router.put('/compra-itens/:id', [
  param('id').isInt(),
  body('id_compra').optional().isInt(),
  body('id_rifa').optional().isInt(),
  body('quantos_numeros').optional().isInt({ min: 1 }),
  body('valor_item').optional().isFloat({ min: 0.1 })
], validateRequest, compraItemController.updateCompraItem);
router.delete('/compra-itens/:id', param('id').isInt(), validateRequest, compraItemController.deleteCompraItem);

module.exports = router;

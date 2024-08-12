const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register route
router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('cpf').isLength({ min: 11, max: 11 }).withMessage('CPF must be 11 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('whatsapp').isLength({ min: 11, max: 14 }).withMessage('Whatsapp must be between 11 and 14 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, cpf, password, whatsapp } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, cpf, password: hashedPassword, whatsapp });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

module.exports = router;

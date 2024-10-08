const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const rifaRoutes = require('./routes/rifas');
app.use('/api/rifas', rifaRoutes);

const compraItens = require('./routes/compraItens');
app.use('/api/compraItens', compraItens);

const compras = require('./routes/compras');
app.use('/api/compra', compras);


// Sincronizar modelos com o banco de dados
models.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

module.exports = app;


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rifas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quant_numeros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quant_sorteados: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor_cota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      premio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_sorteio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      executado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rifas');
  }
};

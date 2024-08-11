'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    static associate(models) {
      // define association here
      Compra.belongsTo(models.User, { foreignKey: 'id_user' });
      Compra.hasMany(models.CompraItem, { foreignKey: 'id_compra' });
    }
  }

  Compra.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false,
    },
    valor_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    data_pagamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pago: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Compra',
    tableName: 'compras',
  });

  return Compra;
};

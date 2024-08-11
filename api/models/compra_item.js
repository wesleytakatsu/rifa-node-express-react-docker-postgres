'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompraItem extends Model {
    static associate(models) {
      // define association here
      CompraItem.belongsTo(models.Compra, { foreignKey: 'id_compra' });
      CompraItem.belongsTo(models.Rifa, { foreignKey: 'id_rifa' });
    }
  }

  CompraItem.init({
    id_compra: {
      type: DataTypes.INTEGER,
      references: {
        model: 'compras',
        key: 'id'
      },
      allowNull: false,
    },
    id_rifa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rifas',
        key: 'id'
      },
      allowNull: false,
    },
    quantos_numeros: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_item: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CompraItem',
    tableName: 'compra_itens',
  });

  return CompraItem;
};

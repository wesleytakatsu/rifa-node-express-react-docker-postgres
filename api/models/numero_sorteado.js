'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NumeroSorteado extends Model {
    static associate(models) {
      // define association here
      NumeroSorteado.belongsTo(models.Rifa, { foreignKey: 'id_rifa' });
    }
  }

  NumeroSorteado.init({
    id_rifa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rifas',
        key: 'id'
      },
      allowNull: false,
    },
    numero_sorteado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'NumeroSorteado',
    tableName: 'numeros_sorteados',
  });

  return NumeroSorteado;
};

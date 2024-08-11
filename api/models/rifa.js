'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rifa extends Model {
    static associate(models) {
      // define association here
      Rifa.hasMany(models.NumeroSorteado, { foreignKey: 'id_rifa' });
      Rifa.hasMany(models.UserNumerosRifa, { foreignKey: 'id_rifa' });
      Rifa.hasMany(models.CompraItem, { foreignKey: 'id_rifa' });
    }
  }

  Rifa.init({
    quant_numeros: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quant_sorteados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_cota: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    premio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_sorteio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    executado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Rifa',
    tableName: 'rifas',
  });

  return Rifa;
};

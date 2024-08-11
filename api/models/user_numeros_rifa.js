'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserNumerosRifa extends Model {
    static associate(models) {
      // define association here
      UserNumerosRifa.belongsTo(models.User, { foreignKey: 'id_user' });
      UserNumerosRifa.belongsTo(models.Rifa, { foreignKey: 'id_rifa' });
    }
  }

  UserNumerosRifa.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
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
    numero_escolhido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserNumerosRifa',
    tableName: 'user_numeros_rifa',
  });

  return UserNumerosRifa;
};

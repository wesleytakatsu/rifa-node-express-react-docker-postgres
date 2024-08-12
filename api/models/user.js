'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Compra, { foreignKey: 'id_user' });
      User.hasMany(models.UserNumerosRifa, { foreignKey: 'id_user' });
    }
  }

  User.init({
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });

  return User;
};

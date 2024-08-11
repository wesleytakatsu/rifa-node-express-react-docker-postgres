'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NewsletterSub extends Model {
    static associate(models) {
      // define association here
    }
  }

  NewsletterSub.init({
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'NewsletterSub',
    tableName: 'newsletter_subs',
  });

  return NewsletterSub;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 const categories = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:{ 
    type: DataTypes.STRING,
    allowNull:false,
    unique: true,
  }
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false,
    tableName: 'categories',
  });
  return categories;
};
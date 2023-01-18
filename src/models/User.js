'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'BlogPost' });
  }
 return user;
};
'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'blogPosts',
        underscored: true,
        timestamps: false,
    });
    blogPosts.associate = (models) => {
        blogPosts.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
    return blogPosts;
    };
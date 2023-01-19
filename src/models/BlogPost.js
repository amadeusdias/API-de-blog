'use strict';
const {Model} = require('sequelize');
const dataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
    const blogPosts = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: {
           type: DataTypes.DATE,
           defaultValue: DataTypes.NOW
        },
        updated: { type: DataTypes.DATE,
            defaultValue: DataTypes.NOW}
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
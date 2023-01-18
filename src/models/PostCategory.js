'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('PostCategory',  {
        postId: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
    },
{
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
  })

  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { 
      foreignKey: 'category_id',
      as: 'blog_posts',
      through: PostCategories,
      otherKey: 'postId'
      });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      as: 'categories', 
      through: PostCategories,
      otherKey: 'categoryId',
    });
  };
  return PostCategories;
};
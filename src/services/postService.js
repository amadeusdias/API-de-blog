const { Op } = require('sequelize');
const { User, Category, BlogPost, PostCategory } = require('../models');

const getAllPost = async () => {
    const list = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],
      });
    return list;
};

const getById = async (id) => {
    const postId = await BlogPost.findOne({
        where: { id },
        include: [{
            model: User,
                as: 'User', 
                atributtes: {
                    exclude: ['password'],
                },
            },
            {
            model: Category,
                as: 'categories',
                through: { atributtes: [] },
            }],
    });
    if (!postId) return { statusCode: 404, message: 'Post does not exist' }; 
    return postId;
};

const newPost = async (categoryIds, title, content, userId) => {
    const categories = await Category.findAll({
        where: { id: { [Op.in]: categoryIds } },
    });
    if (categories.length !== categoryIds.length) {
return { statusCode: 400, message: 'one or more "categoryIds" not found' };
    }
    const post = await BlogPost.create({
        title, content, userId,
    });
     await Promise.all(categoryIds.map((i) => PostCategory.create({
            categoryId: i, postId: post.id,
        })));
    return post;
};

module.exports = {
    getAllPost,
    getById,
    newPost,
};
const { Category } = require('../models');

const addCategory = async ({ name }) => {
    const category = await Category.create({ name });
    const insertId = category.null;
    return { statusCode: 201, message: { id: insertId, name } };
};

const getCategories = async () => {
    const categories = await Category.findAll({ attributes: { exclude: ['password'] } });
    return categories;
};

module.exports = {
    addCategory,
    getCategories,
};
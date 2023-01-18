const { Category } = require('../models');

const addCategory = async ({ name }) => {
    const category = await Category.create({ name });
    const insertId = category.null;
    return { statusCode: 201, message: { id: insertId, name } };
};

module.exports = {
    addCategory,
};
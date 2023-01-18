const { addCategory, getCategories } = require('../services/categoryService');

const addController = async (req, res) => {
    const { statusCode, message } = await addCategory(req.body);
    return res.status(statusCode).json(message);
};

const listController = async (req, res) => {
    const list = await getCategories();
    res.status(200).json(list);
};

module.exports = {
    addController,
    listController, 
};
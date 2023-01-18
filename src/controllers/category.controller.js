const { addCategory } = require('../services/categoryService');

const addController = async (req, res) => {
    const { statusCode, message } = await addCategory(req.body);
    return res.status(statusCode).json(message);
};

module.exports = {
    addController,
};
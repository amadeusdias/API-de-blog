const userService = require('../services/userService');
const { User } = require('../models');

const userController = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { type, statusCode, message } = await userService(req.body);
    await User.create({ displayName, email, password, image });
    if (type) {
        return res.status(statusCode).json(message);
    }
    return res.status(statusCode).json(message);
};

module.exports = userController;
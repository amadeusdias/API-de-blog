const { userService, allUsers, userById } = require('../services/userService');
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

const listController = async (req, res) => {
    const list = await allUsers();
    res.status(200).json(list);
};

const listIdController = async (req, res) => {
    const { id } = req.params;
    const { statusCode, message, result } = await userById(id);
    if (message) {
        return res.status(statusCode).json({ message });
    }
    return res.status(statusCode).json(result);
};

module.exports = { userController, listController, listIdController };
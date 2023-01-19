const { userService, allUsers, userById, deleteUser } = require('../services/userService');
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

const deleteController = async (req, res) => {
    const { data } = req.user;
    console.log(data);
    await deleteUser(data.id);
    res.status(204).end();
};

module.exports = { userController, listController, listIdController, deleteController };
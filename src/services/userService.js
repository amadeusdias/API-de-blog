const { User } = require('../models');
const { generateToken } = require('../auth/token');

const userService = async (data) => {
    const { email } = data;
    const token = generateToken(email);
    return { type: null, statusCode: 201, message: { token } };
};

const allUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const userById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
    console.log(user);
    if (!user) {
        return { statusCode: 404, message: 'User does not exist' };
    }
    return { statusCode: 200, result: user };
};

module.exports = {
    allUsers,
    userService,
    userById,
};
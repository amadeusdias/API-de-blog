const { User } = require('../models');
const { generateToken } = require('../auth/token');

const userService = async (data) => {
    const { email } = data;
    const user = await User.findOne({ where: { email } });
    console.log(email);
    if (user !== null) {
        return { type: 'already_exits', statusCode: 409, message: 'User already registered' };
    }
    const token = generateToken(email);
    return { type: null, statusCode: 201, message: { token } };
};

module.exports = userService;
const { generateToken } = require('../auth/token');

const userService = async (data) => {
    const { email } = data;
    const token = generateToken(email);
    return { type: null, statusCode: 201, message: { token } };
};

module.exports = userService;
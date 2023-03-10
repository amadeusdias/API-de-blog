const { User } = require('../models');
const { generateToken } = require('../auth/token');

const loginService = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
    if (!user) {
        return { type: 'invalid_fields', statusCode: 400, message: 'Invalid fields' };
    }
    const token = generateToken(user);
    return { type: null, statusCode: 200, message: { token } };
};
module.exports = loginService;
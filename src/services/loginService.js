const { User } = require('../models');
const { createToken } = require('../auth/token');

const loginService = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { status: 400, message: 'Invalid fields' };
    const token = createToken(email);
    return { token };
};

module.exports = loginService;
require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

const generateToken = (data) => {
    const token = jwt.sign(data, secret, jwtConfig);
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        return { decoded };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    generateToken,
    verifyToken,
};

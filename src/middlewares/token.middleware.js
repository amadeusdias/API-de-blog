require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
     const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const auth = jwt.verify(token, secret);
        req.user = auth;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
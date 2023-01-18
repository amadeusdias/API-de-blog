const loginService = require('../services/loginService');

const loginController = async (req, res) => {
    const { type, statusCode, message } = await loginService(req.body);
    if (type) return res.status(statusCode).json({ message });
    res.status(statusCode).json({ message });
};

module.exports = loginController;

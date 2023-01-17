const loginService = require('../services/loginService');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const { token } = await loginService(email, password);
    if (!token) return res.status(401).json({ message: 'Invalid fields' });
    res.status(200).json({ token });
};

module.exports = loginController;

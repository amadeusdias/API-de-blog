const express = require('express');
const loginController = require('../controllers/login.controller.js');
const loginMiddleware = require('../middlewares/login.middleware.js');

const router = express.Router();

router.post('/', loginMiddleware, loginController);

module.exports = router;
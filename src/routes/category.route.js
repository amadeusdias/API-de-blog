const express = require('express');

const Controller = require('../controllers/category.controller');
const { validateName } = require('../middlewares/categories.middleware');
const tokenVerify = require('../middlewares/token.middleware');

const router = express.Router();

router.post('/', tokenVerify, validateName, Controller.addController);

module.exports = router;
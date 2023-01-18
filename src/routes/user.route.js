const express = require('express');
const userController = require('../controllers/user.controller');
const { 
    displayNameValidation, 
    emailValidation, 
    passwordValidation, 
    verifyEmail,
} = require('../middlewares/user.middleware');

const router = express.Router();

router.post('/',
 displayNameValidation, emailValidation, passwordValidation, verifyEmail, userController);

module.exports = router;
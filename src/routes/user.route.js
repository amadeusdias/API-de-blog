const express = require('express');
const { 
    userController,
    listController,
    listIdController,
    deleteController,
} = require('../controllers/user.controller');
const { 
    displayNameValidation, 
    emailValidation, 
    passwordValidation, 
    verifyEmail,
} = require('../middlewares/user.middleware');

const tokenVerify = require('../middlewares/token.middleware');

const router = express.Router();

router.post('/',
 displayNameValidation, emailValidation, passwordValidation, verifyEmail, userController);

router.get('/', tokenVerify, listController);
router.get('/:id', tokenVerify, listIdController);
router.delete('/me', tokenVerify, deleteController);

module.exports = router;
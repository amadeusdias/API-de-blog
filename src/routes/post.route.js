const express = require('express');
const postController = require('../controllers/post.controller');
const tokenVerify = require('../middlewares/token.middleware');
const { postValidate, postDeleteValidate } = require('../middlewares/post.middleware');

const router = express.Router();

router.get('/', tokenVerify, postController.getAllController);
router.get('/:id', tokenVerify, postController.getByIdController);
router.post('/', tokenVerify, postValidate, postController.newPost);
router.put('/:id', tokenVerify, postDeleteValidate, postController.updateController);
router.delete('/:id', tokenVerify, postController.deleteController);

module.exports = router;
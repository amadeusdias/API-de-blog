const postService = require('../services/postService');

const getAllController = async (_req, res) => {
    const list = await postService.getAllPost();
    return res.status(200).json(list);
};

const getByIdController = async (req, res) => {
    const { id } = req.params;
    const postById = await postService.getById(id);
    if (postById.message) {
       return res.status(postById.statusCode).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(postById);
};

const newPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { data } = req.user;
    const post = await postService.newPost(categoryIds, title, content, data.id);
    if (post.statusCode) {
        return res.status(post.statusCode).json({ message: post.message });
    }
    return res.status(201).json(post);
};

module.exports = {
    getAllController,
    getByIdController,
    newPost,
};
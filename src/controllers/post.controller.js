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

const updateController = async (req, res) => {
    const { title, content } = req.body;
    const { data } = req.user;
    const { id } = req.params;

    const update = await postService.updatePost(id, title, content, data.id);
    if (data.id !== update.id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    return res.status(200).json(update);
};

const deleteController = async (req, res) => {
    const { id } = req.params;
    const { data } = req.user;
    const post = await postService.deletePost(id, data.id);
    if (post) {
        return res.status(post.statusCode).json({ message: post.message });
    }
    return res.status(204).end();
};

module.exports = {
    getAllController,
    getByIdController,
    newPost,
    updateController,
    deleteController,
};
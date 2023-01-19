// const Joi = require('joi');
// const status = require('../utils/status');

// const postValidate = (req, res, next) => {
//     const postSchema = Joi.object({
//         title: Joi.string().required(),
//         content: Joi.string().required(),
//         categorysIds: Joi.array().items(Joi.number().integer()).min(1),
//     }).required();

//     const { title, content, categoryIds } = req.body;
//     const { error } = postSchema.validate({ title, content, categoryIds });

//     if (error) {
//         return res
//         .status(status[error.details[0].type])
//         .json({ message: 'Some required fields are missing' });
//     }
//     next();
// };

const postValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const postDeleteValidate = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = { postValidate, postDeleteValidate };
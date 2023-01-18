const displayNameValidation = (req, res, next) => {
    const { displayName } = req.body;
 if (displayName.length < 8) { 
    return res
    .status(400).json({ message: '"displayName" length must be at least 8 characters long' }); 
}
return next();
};

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^\w+@[a-z]+(\.[a-z]+){1,2}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send({ message: '"email" must be a valid email' });
    }
    next();
};

const passwordValidation = (req, res, next) => {
    const { password } = req.body;
 if (password.length < 6) { 
    return res
    .status(400).json({ message: '"password" length must be at least 6 characters long' }); 
}
return next();
};

module.exports = {
    displayNameValidation,
    emailValidation,
    passwordValidation,
};
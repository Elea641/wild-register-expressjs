const argon2 = require('argon2');

const hashOptions = {
    type: argon2.argon2d,
    memoryCost: 2 ** 16,
    hashLength: 50,
}

const hashPassword = async (req, res, next) => {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashOptions);
    req.body.hashedPassword = hashedPassword;
    delete req.body.password;
    next();
}

module.exports = hashPassword;
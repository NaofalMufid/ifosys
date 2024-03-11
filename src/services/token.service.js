const jwt = require('jsonwebtoken');

const generateToken = (payload, secret_token, expire = '7d') => {
    try {
        const token = jwt.sign(payload, secret_token, { expiresIn: expire });
        return token;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    generateToken,
};

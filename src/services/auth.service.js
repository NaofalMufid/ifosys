const bcrypt = require('bcrypt');
const UserData = require('../data/users.data');
const TokenService = require('./token.service');
const { BadRequestError } = require('../helper/errorHandler');

const findUserEmail = async (email) => {
    try {
        const data = await UserData.authUserByEmail(email);
        return data;
    } catch (err) {
        throw err;
    }
};

const checkPassword = async (reqPassword, password) => {
    try {
        const match = await bcrypt.compare(reqPassword, password);
        if (!match) {
            const err = new BadRequestError('invalid user credential!');
            throw err;
        }
        return true;
    } catch (err) {
        throw err;
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await findUserEmail(email);
        await checkPassword(password, user.password);
        const payload = {
            user_id: user.user_id,
            email: user.email,
            role_id: user.role_id,
            banom_id: user.id_banom,
        };
        const token = TokenService.generateToken(payload, process.env.JWT_TOKEN_SECRET, '1d');
        return token;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    loginUser,    
};

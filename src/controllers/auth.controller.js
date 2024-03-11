const AuthService = require('../services/auth.service');
const { successResponse } = require('../helper/responseAPI');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await AuthService.loginUser(email, password);
        return successResponse(res, 'Success login user', 200, { token: user });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login,
};

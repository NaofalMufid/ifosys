const UserService = require('../services/user.service');
const { successResponse } = require('../helper/responseAPI');

const newUser = async (req, res, next) => {
    const { name, email, phone_number = null, password, role_id, id_banom = null } = req.body;
    const payload = { name, email, phone_number, password, role_id, id_banom };
    try {
        await UserService.createUser(payload);
        return successResponse(res, 'Success create new user', 201, { name });
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, phone_number, role_id, id_banom } = req.body;
    const payload = { user_id: id, name, phone_number, role_id, id_banom };
    try {
        await UserService.updateUser(payload);
        return successResponse(res, 'Success edit user', 200, { name });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        await UserService.deleteUser(id);
        return successResponse(res, 'Success delete user', 200, { id });
    } catch (err) {
        next(err);
    }
};

const allUsers = async (req, res, next) => {
    try {
        const data = await UserService.getAllUser();
        return successResponse(res, 'Success get all user', 200, data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    newUser,
    updateUser,
    deleteUser,
    allUsers,
};

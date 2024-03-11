const RoleService = require('../services/roles.service');
const { successResponse, errorResponse } = require('../helper/responseAPI');

const newRole = async (req, res, next) => {
    const { role_name } = req.body;
    try {
        await RoleService.createRoles(role_name);
        return successResponse(res, 'Success create new user role', 201, { role_name });
    } catch (err) {
        next(err);
    }
};

const updateRole = async (req, res, next) => {
    const { id } = req.params;
    const { role_name } = req.body;
    try {
        await RoleService.updateRoles(parseInt(id), role_name);
        return successResponse(res, 'Success edit user role', 200, { role_name });
    } catch (err) {
        next(err);
    }
};

const deleteRole = async (req, res, next) => {
    const { id } = req.params;
    try {
        await RoleService.deleteRoles(parseInt(id));
        return successResponse(res, 'Success delete user role', 200, { id });
    } catch (err) {
        next(err);
    }
};

const allRoles = async (req, res, next) => {
    try {
        const data = await RoleService.getAllRoles();
        return successResponse(res, 'Success get all user roles', 200, data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    newRole,
    updateRole,
    deleteRole,
    allRoles,
};

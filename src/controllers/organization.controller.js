const OrgService = require('../services/organizations.service');
const { successResponse, errorResponse } = require('../helper/responseAPI');

const newOrg = async (req, res, next) => {
    try {
        await OrgService.createOrg(req.body);
        return successResponse(res, 'Success create new Organization', 201, { name: req.body.name });
    } catch (err) {
        next(err);
    }
};

const updateOrg = async (req, res, next) => {
    const { id } = req.params;
    const payload = { ...{ id }, ...req.body };
    try {
        await OrgService.updateOrg(payload);
        return successResponse(res, 'Success edit Organization', 200);
    } catch (err) {
        next(err);
    }
};

const deleteOrg = async (req, res, next) => {
    const { id } = req.params;
    try {
        await OrgService.deleteOrg(id);
        return successResponse(res, 'Success delete Organization', 200, { id });
    } catch (err) {
        next(err);
    }
};

const allOrg = async (req, res, next) => {
    try {
        const data = await OrgService.getAllOrg();
        return successResponse(res, 'Success get all Organization', 200, data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    newOrg,
    updateOrg,
    deleteOrg,
    allOrg,
};

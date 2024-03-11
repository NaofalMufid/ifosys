const StructureService = require('../services/org-structure.service');
const { successResponse, errorResponse } = require('../helper/responseAPI');

const newStructure = async (req, res, next) => {
    try {
        await StructureService.createStructure(req.body);
        return successResponse(res, 'Success create new Organization Structure', 201);
    } catch (err) {
        next(err);
    }
};

const updateStructure = async (req, res, next) => {
    const { id } = req.params;
    const payload = { ...{ id }, ...req.body };
    try {
        await StructureService.updateStructure(payload);
        return successResponse(res, 'Success edit Organization Structure', 200);
    } catch (err) {
        next(err);
    }
};

const deleteStructure = async (req, res, next) => {
    const { id } = req.params;
    try {
        await StructureService.deleteStructure(id);
        return successResponse(res, 'Success delete Organization Structure', 200, { id });
    } catch (err) {
        next(err);
    }
};

const allStructure = async (req, res, next) => {
    try {
        const data = await StructureService.getAllStructure();
        return successResponse(res, 'Success get all Organization Structure', 200, data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    newStructure,
    updateStructure,
    deleteStructure,
    allStructure,    
};

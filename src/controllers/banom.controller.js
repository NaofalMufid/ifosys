const BanomService = require('../services/banom.service');
const { successResponse } = require('../helper/responseAPI');

const newBanom = async (req, res, next) => {
    const { name, order_number } = req.body;
    try {
        await BanomService.createBanom(name, order_number);
        return successResponse(res, 'Success create new banom', 201, { name });
    } catch (err) {
        next(err);
    }
};

const updateBanom = async (req, res, next) => {
    const { id } = req.params;
    const { name, order_number } = req.body;
    const payload = { id: parseInt(id), name, order_number };
    try {
        await BanomService.updateBanom(payload);
        return successResponse(res, 'Success edit banom', 200, { name });
    } catch (err) {
        next(err);
    }
};

const deleteBanom = async (req, res, next) => {
    const { id } = req.params;
    try {
        await BanomService.deleteBanom(parseInt(id));
        return successResponse(res, 'Success delete banom', 200, { id });
    } catch (err) {
        next(err);
    }
};

const allBanoms = async (req, res, next) => {
    try {
        const data = await BanomService.getAllBanom();
        return successResponse(res, 'Success get all banom', 200, data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    newBanom,
    updateBanom,
    deleteBanom,
    allBanoms,
};

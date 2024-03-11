const BanomData = require('../data/banom.data');

const createBanom = async (name, order_number) => {
    try {
        await BanomData.createBanom(name, order_number);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateBanom = async (payload) => {
    try {
        await BanomData.updateBanom(payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteBanom = async (id) => {
    try {
        await BanomData.deleteBanom(id);
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllBanom = async () => {
    try {
        const data = await BanomData.getBanom();
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createBanom,
    updateBanom,
    deleteBanom,
    getAllBanom,
};

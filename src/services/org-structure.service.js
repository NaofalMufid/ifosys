const StructureData = require('../data/org-structure.data');

const createStructure = async (payload) => {
    const { id_banom, posisi, masa_jabatan, member_id = null, pengurus = null, status = 'AKTIF' } = payload;
    const new_payload = { id_banom, posisi, masa_jabatan, member_id, pengurus, status };
    try {
        await StructureData.createOrgStructure(new_payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateStructure = async (payload) => {
    const { id, id_banom, posisi, masa_jabatan, member_id = null, pengurus = null, status = 'AKTIF' } = payload;
    const new_payload = { id_banom, posisi, masa_jabatan, member_id, pengurus, status };
    try {
        await StructureData.findStructureById(id);
        await StructureData.updateOrgStructure(new_payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteStructure = async (id) => {
    try {
        await StructureData.findStructureById(id);
        await StructureData.deleteOrgStructure(id);
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllStructure = async () => {
    try {
        const data = await StructureData.getAllStructure();
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createStructure,
    updateStructure,
    deleteStructure,
    getAllStructure,
};

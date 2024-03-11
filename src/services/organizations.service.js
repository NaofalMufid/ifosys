const OrgData = require('../data/organizations.data');

const createOrg = async (payload) => {
    const { name, phone_number = null, email = null, address = null, description = null, history = null, id_admin, id_banom } = payload;
    const new_payload = { name, phone_number, email, address, description, history, id_admin, id_banom };
    try {
        await OrgData.createOrg(new_payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateOrg = async (payload) => {
    const { id, name, phone_number = null, email = null, address = null, description = null, history = null, id_admin, id_banom } = payload;
    const new_payload = { org_id: id, name, phone_number, email, address, description, history, id_admin, id_banom };
    try {
        await OrgData.findOrgById(id);
        await OrgData.updateOrg(new_payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteOrg = async (id) => {
    try {
        await OrgData.findOrgById(id);
        await OrgData.deleteOrg(id);
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllOrg = async () => {
    try {
        const data = await OrgData.getAllOrg();
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createOrg,
    updateOrg,
    deleteOrg,
    getAllOrg,
};

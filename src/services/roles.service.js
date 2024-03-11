const RoleData = require('../data/roles.data');

const createRoles = async (name) => {
    try {
        await RoleData.createRoles(name);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateRoles = async (id, name) => {
    try {
        await RoleData.updateRoles(id, name);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteRoles = async (id) => {
    try {
        await RoleData.deleteRoles(id);
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllRoles = async () => {
    try {
        const data = await RoleData.getUserRoles();
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createRoles,
    updateRoles,
    deleteRoles,
    getAllRoles,
};

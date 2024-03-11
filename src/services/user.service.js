const UserData = require('../data/users.data');

const createUser = async (payload) => {
    try {
        await UserData.createUser(payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateUser = async (payload) => {
    try {
        await UserData.findUserById(payload.user_id);
        await UserData.updateUser(payload);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (id) => {
    try {
        await UserData.findUserById(id);
        await UserData.deleteUser(id);
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllUser = async () => {
    try {
        const data = await UserData.findAllUsers();
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
};

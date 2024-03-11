const { pool } = require('../config/pool');
const { BadRequestError } = require('../helper/errorHandler');

const createRoles = async (name = 'no_name') => {
    try {
        await pool.query(`INSERT INTO user_roles (name) VALUES (?)`, [name]);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateRoles = async (id, name) => {
    try {
        const [find_role] = await pool.query(`SELECT * FROM user_roles WHERE role_id = ?`, [id]);
        if (find_role.length < 1) {
            const err = new BadRequestError('user roles not found!');
            throw err;
        }
        await pool.query(`UPDATE user_roles SET name = ? WHERE role_id = ?`, [name, id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteRoles = async (id) => {
    try {
        const [find_role] = await pool.query(`SELECT * FROM user_roles WHERE role_id = ?`, [id]);
        if (find_role.length < 1) {
            const err = new BadRequestError('user roles not found!');
            throw err;
        }
        await pool.query(`DELETE FROM user_roles WHERE role_id = ?`, [id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const getUserRoles = async () => {
    try {
        const [data] = await pool.query(`SELECT * FROM user_roles ORDER BY role_id ASC`);
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createRoles,
    updateRoles,
    deleteRoles,
    getUserRoles,
};

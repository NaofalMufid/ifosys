const { ulid } = require('ulidx');
const { hash } = require('bcrypt');
const { pool } = require('../config/pool');
const { BadRequestError } = require('../helper/errorHandler');

const createUser = async (payload) => {
    const { name, email, phone_number = null, password, role_id, id_banom = null } = payload;
    const user_id = ulid();
    const hashedPassword = await hash(password, 10);

    try {
        await pool.query(`INSERT INTO users (user_id, name, email, phone_number, password, role_id, id_banom)
        VALUES(?,?,?,?,?,?,?)`, [user_id, name, email, phone_number, hashedPassword, role_id, id_banom]);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateUser = async (payload) => {
    const { user_id, name, phone_number = null, role_id, id_banom = null } = payload;
    try {
        await pool.query(`UPDATE users SET
            name = ?, phone_number = ?, role_id = ?, id_banom = ?
            WHERE user_id = ?
        `, [name, phone_number, role_id, id_banom, user_id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (user_id) => {
    try {
        await pool.query(`DELETE FROM users WHERE user_id = ?`, [user_id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const findUserById = async (user_id) => {
    try {
        const [find_user] = await pool.query(`
            SELECT
                u.user_id, u.name, u.email, u.phone_number, u.role_id, r.name AS role_name, u.id_banom, b.name AS banom_name
            FROM users u
            LEFT JOIN user_roles r ON u.role_id = r.role_id
            LEFT JOIN banom b ON u.id_banom = b.banom_id
            WHERE user_id = ?
        `, [user_id]);
        if (find_user.length < 1) {
            const err = new BadRequestError('user not found!');
            throw err;
        }
        return true;
    } catch (err) {
        throw err;
    }
};

const authUserByEmail = async (email) => {
    try {
        const [find_user] = await pool.query(`
            SELECT u.user_id, u.email, u.password, u.role_id, u.id_banom
            FROM users u WHERE u.email = ?
        `, [email]);
        if (find_user.length < 1) {
            const err = new BadRequestError('user not found!');
            throw err;
        }
        const data = find_user[0];
        return data;
    } catch (err) {
        throw err;
    }
};

const findAllUsers = async () => {
    try {
        const [data] = await pool.query(`
            SELECT 
                u.user_id, u.name, u.email, u.phone_number, u.role_id, r.name AS role_name, u.id_banom, b.name AS banom_name
            FROM users u
            LEFT JOIN user_roles r ON u.role_id = r.role_id
            LEFT JOIN banom b ON u.id_banom = b.banom_id
            ORDER BY u.user_id ASC
        `);
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    authUserByEmail,
    findAllUsers,
};

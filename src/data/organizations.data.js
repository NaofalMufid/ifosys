const { ulid } = require('ulidx');
const { pool } = require('../config/pool');
const { BadRequestError } = require('../helper/errorHandler');

const createOrg = async (payload) => {
    const { name, phone_number, email, address, description, history, id_admin, id_banom } = payload;
    const org_id = ulid();
    try {
        await pool.query(`
            INSERT INTO organizations (org_id, name, phone_number, email, address, description, history, id_admin, id_banom)
            VALUES (?,?,?,?,?,?,?,?,?)
            `, [org_id, name, phone_number, email, address, description, history, id_admin, id_banom]
        );
        return true;
    } catch (err) {
        throw err;
    }
};

const updateOrg = async (payload) => {
    const { org_id, name, phone_number, email, address, description, history, id_admin, id_banom } = payload;
    try {
        await pool.query(`
            UPDATE organizations SET 
                name = ?, phone_number = ?, email = ?, address = ?, description = ?, history = ?, id_admin = ?, id_banom = ?
            WHERE org_id = ?
        `, [name, phone_number, email, address, description, history, id_admin, id_banom, org_id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteOrg = async (id) => {
    try {
        await pool.query(`DELETE FROM organizations WHERE org_id = ?`, [id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const findOrgById = async (id) => {
    try {
        const [find_role] = await pool.query(`SELECT * FROM organizations WHERE org_id = ?`, [id]);
        if (find_role.length < 1) {
            const err = new BadRequestError('organizations not found!');
            throw err;
        }
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllOrg = async (payload) => {
    const { filter, replacements } = payload;
    try {
        const [data] = await pool.query(`
            SELECT o.*, u.name AS admin_name, b.name AS banom_name
            FROM organizations o
            LEFT JOIN users u ON o.id_admin = u.user_id
            LEFT JOIN banom b ON o.id_banom = b.banom_id
            WHERE 1=1 ${filter}
            ORDER BY org_id ASC
        `, replacements);
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createOrg,
    updateOrg,
    deleteOrg,
    findOrgById,
    getAllOrg,
};

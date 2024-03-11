const { ulid } = require('ulidx');
const { pool } = require('../config/pool');
const { BadRequestError } = require('../helper/errorHandler');

const createOrgStructure = async (payload) => {
    const { id_banom, posisi, masa_jabatan, member_id, pengurus, status } = payload;
    const org_structure_id = ulid();
    try {
        await pool.query(`
            INSERT INTO organization_structure (structure_id, id_banom, posisi, masa_jabatan, member_id, pengurus, status)
            VALUES (?,?,?,?,?,?,?)
            `, [org_structure_id, id_banom, posisi, masa_jabatan, member_id, pengurus, status]
        );
        return true;
    } catch (err) {
        throw err;
    }
};

const updateOrgStructure = async (payload) => {
    const { id, id_banom, posisi, masa_jabatan, member_id, pengurus, status } = payload;
    try {
        await pool.query(`
            UPDATE organization_structure SET 
                id_banom = ?, posisi = ?, masa_jabatan = ?, member_id = ?, pengurus = ?, status = ?
            WHERE structure_id = ?
        `, [id_banom, posisi, masa_jabatan, member_id, pengurus, status, id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteOrgStructure = async (id) => {
    try {
        await pool.query(`DELETE FROM organization_structure WHERE structure_id = ?`, [id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const findStructureById = async (id) => {
    try {
        const [find_role] = await pool.query(`SELECT * FROM organization_structure WHERE structure_id = ?`, [id]);
        if (find_role.length < 1) {
            const err = new BadRequestError('organization structure not found!');
            throw err;
        }
        return true;
    } catch (err) {
        throw err;
    }
};

const getAllStructure = async () => {
    try {
        const [data] = await pool.query(`
            SELECT os.*, b.name AS banom_name
            FROM organization_structure os
            LEFT JOIN banom b ON os.id_banom = b.banom_id
        `);
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createOrgStructure,
    updateOrgStructure,
    deleteOrgStructure,
    findStructureById,
    getAllStructure,
};

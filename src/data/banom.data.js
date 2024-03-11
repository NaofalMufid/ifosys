const { pool } = require('../config/pool');
const { BadRequestError } = require('../helper/errorHandler');

const createBanom = async (name = 'no_name', order_number = 0) => {
    try {
        await pool.query(`INSERT INTO banom (name, order_number) VALUES (?,?)`, [name, order_number]);
        return true;
    } catch (err) {
        throw err;
    }
};

const updateBanom = async (payload) => {
    const { id, name, order_number } = payload;
    try {
        const [find_banom] = await pool.query(`SELECT * FROM banom WHERE banom_id = ?`, [id]);
        if (find_banom.length < 1) {
            const err = new BadRequestError('banom not found!');
            throw err;
        }
        await pool.query(`UPDATE banom SET name = ?, order_number = ? WHERE banom_id = ?`, [name, order_number, id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteBanom = async (id) => {
    try {
        const [find_banom] = await pool.query(`SELECT * FROM banom WHERE banom_id = ?`, [id]);
        if (find_banom.length < 1) {
            const err = new BadRequestError('banom not found!');
            throw err;
        }
        await pool.query(`DELETE FROM banom WHERE banom_id = ?`, [id]);
        return true;
    } catch (err) {
        throw err;
    }
};

const getBanom = async () => {
    try {
        const [data] = await pool.query(`SELECT * FROM banom ORDER BY order_number ASC`);
        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createBanom,
    updateBanom,
    deleteBanom,
    getBanom,
};

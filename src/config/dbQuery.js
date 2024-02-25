const {pool} = require('./pool');

module.exports = {
    /**
     * DB QUERY
     * @param {object} req
     * @param {object} res
     * @returns {object} object
     */
    query(queryText, params) {
        return new Promise((resolve, reject)  => {
            pool.query(query, params, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    },
};
const mysql = require('mysql2/promise');
const config_private = require('../config_private');

async function query(sql, params) {
    const pool = await mysql.createPool(config_private.db);
    const [results, ] = await pool.execute(sql, params);
    return results;
};

module.exports = { query };
const mysql = require('mysql2/promise');
const config_private = require('../config_private');

async function query(sql, params) {
    const connection = await mysql.createConnection(config_private.db);
    const [results, ] = await connection.execute(sql, params);
    return results;
};

module.exports = { query };
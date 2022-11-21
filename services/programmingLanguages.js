const db = require('./db');
const config = require('../config_private');

async function getMultiple() {
    const data = await db.query('SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages');
    return {
        data
    };
};



module.exports = { getMultiple };
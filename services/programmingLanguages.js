const db = require('./db');
const config = require('../config_private');

async function getMultiple() {
    const data = await db.query('SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages');
    return {
        data
    };
};

async function addSingle() {
    const data = await db.query('INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES ("will-speak", 1993, 1, 2, 3)');
};


module.exports = { getMultiple, addSingle };
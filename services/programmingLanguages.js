const db = require('./db');
const config = require('../config_private');
const { resourceLimits } = require('worker_threads');

async function getMultiple() {
    const data = await db.query('SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages');
    return {
        data
    };
};

async function create() {
    const result = await db.query('INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES ("will-speak", 1993, 1, 2, 3)');

    let message = 'Error in creating programming language';

    if(result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return message;
};


module.exports = { getMultiple, create };
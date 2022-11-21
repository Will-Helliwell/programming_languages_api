const db = require('./db');
const config = require('../config_private');
const { resourceLimits } = require('worker_threads');

async function getMultiple() {
    const data = await db.query('SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank FROM programming_languages');
    return {
        data
    };
};

async function create(programmingLanguage) {
    const sqlQuery = `INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES (${programmingLanguage.name}, ${programmingLanguage.released_year}, ${programmingLanguage.githut_rank}, ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`;
    console.log(sqlQuery);
    const result = await db.query(sqlQuery);

    let message = 'Error in creating programming language';

    if(result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return message;
};

module.exports = { getMultiple, create };
const express = require('express');
const router = express.Router(); // creates a router object (i.e. a mini-application that can have multiple routes definied within it)
const programming_languages = require('../services/programmingLanguages');

// get all programming languages
router.get('/', async function(req, res, next) {
    try {
        res.json(await programming_languages.getMultiple());
    } catch (err) {
        console.error('Error while getting programming languages: ', err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await programming_languages.create());
    } catch (err) {
        console.error('Error while adding a programming language: ', err.message)
        next(err);
    }
});

module.exports = router;
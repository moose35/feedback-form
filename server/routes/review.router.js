const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //gets review data from database
    console.log('GET /api/full-review');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/full-review', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('POST route for full feedback');
})

module.exports = router;
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
    const newFeedback = req.body;
    console.log(newFeedback);
    
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [newFeedback[0], newFeedback[1], newFeedback[2], newFeedback[3]])
        .then((result) => {
            console.log(`Added feedback to the database`, newFeedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})


module.exports = router;
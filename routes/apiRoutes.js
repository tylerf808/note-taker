const db = require('../db/db.json')
const fs = require('fs');
const { json } = require('express');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(db);
    })

    app.post('/api/notes', (req, res) => {
        const string = fs.readFile('db/db.json', 'UTF-8', (err) => {
            if (err)
                console.log(err)
        })
        console.log(JSON.parse(string))
    })
}
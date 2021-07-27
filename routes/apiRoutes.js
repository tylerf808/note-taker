const db = require('../db/db.json')
const fs = require('fs');
const shortid = require("shortid");

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(db);
    })

    app.post('/api/notes', (req, res) => {
        const notes = req.body;
        notes.id = shortid.generate();
        db.push(notes);
        res.json(notes);
    })
}
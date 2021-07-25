const db = require('../db/db.json')
const fs = require('fs');
const { json } = require('express');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(db);
    })

    app.post('/api/notes', (req, res) => {
        
        console.log(notes)
    })
}
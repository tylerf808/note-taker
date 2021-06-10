const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        const data = fs.readFileSync('../../develop/note-taker/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
        })
        res.json(data);
    })
}
const util = require('util')
const fs = require('fs')

class Notes {

    getNotes() {
        console.log(fs.readFile('db/db.json', 'UTF-8', (err) => {
            if(err)
                console.log(err)
        }))
    }
}

const note = new Notes()

note.getNotes()
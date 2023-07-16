//importing modules
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// path defined to the db.json file
const dbPath = path.join(__dirname, '..', 'db', 'db.json');

function Notes() {
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

// saves to the db.json file
function noteSaving(notes) {
    fs.writeFileSync(dbPath, JSON.stringify(notes));
}

router.get('/notes', (req, res) => {
    const notes = Notes();
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = Notes();
    newNote.id = Date.now().toString();
    notes.push(newNote);
    noteSaving(notes);
    res.json(newNote);
});

//exporting modules
module.exports = router;
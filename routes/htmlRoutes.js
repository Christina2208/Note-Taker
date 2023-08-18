// Importing modules
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exporting modules
module.exports = router;
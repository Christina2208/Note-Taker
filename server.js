// importing modules
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//creating the notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server message on start
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`)
});

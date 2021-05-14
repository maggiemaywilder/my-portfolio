const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const nodemailer = require('nodemailer');
const PORT = 3005;

const app = express();

// static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => console.log('Server started'));
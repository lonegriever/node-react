const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/users', (req, res) => {
    res.status(200).send({
        users: ['Monk', 'Everard', 'Isaac']
    });
});

console.log(process.env.REACT_APP_TEST)

app.post('/api/add-post', (req, res) => {
    res.status(200).send(req.body)
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(5000, () => {
    console.log('server is now listening at port 5000');
});
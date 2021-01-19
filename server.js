const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', () => {
    console.log('new socket connection');
    io.emit('broadcast', {message: 'fathead'})
})

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/users', (req, res) => {
    res.status(200).send({
        users: ['Monk', 'Everard', 'Isaac']
    });
});

app.post('/api/add-post', (req, res) => {
    res.status(200).send(req.body)
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

server.listen(5000, () => {
    console.log('server is now listening at port 5000');
});
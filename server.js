const app = require('express')();
const http = require('http');


async function startServer() {
    const loaders = require('./server/loaders/main');
    const server = http.createServer(app);
    await loaders({expressApp: app, server: server});

    server.listen(process.env.PORT || 5000, () => {
        console.log('server is now listening at port 5000');
    });
}

startServer();
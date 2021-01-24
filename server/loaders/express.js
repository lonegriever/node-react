const path = require('path');
const express = require('express');
module.exports = ({expressApp}) => {
    expressApp.use(express.json());
    expressApp.use(express.static(path.resolve('./client/build')));
    expressApp.use(require(path.resolve('./server/routes/router-index.js')));

    expressApp.get('*', (_, res) => {
        res.sendFile(path.resolve('./client/build/index.html'));
    });
}






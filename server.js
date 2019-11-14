const express = require('express');
const helmet = require('helmet');

const server = express();

server.use('/api', (req, res) => {
    res.status(200).json(`API running`)
})

module.exports = server;
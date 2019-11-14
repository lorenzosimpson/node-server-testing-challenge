const express = require('express');
const helmet = require('helmet');

const server = express();

server.use('/api', (req, res) => {
    res.send(`API running`)
})

module.exports = server;
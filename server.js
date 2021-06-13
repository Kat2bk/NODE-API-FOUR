require('dotenv').config();

const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
server.use(express.json());

// endpoints, middleware, routers
server.use(morgan('dev'))

server.get('/', (req, res) => {
    res.json({message: 'Welcome to the API Home'});
})

module.exports = server;

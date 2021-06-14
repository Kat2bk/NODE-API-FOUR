require('dotenv').config();

const express = require('express');
const server = express();
const morgan = require('morgan');
server.use(express.json());

// endpoints, middleware, routers
server.use(morgan('dev'))

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors())
}

// on heroku, node_env will be production, but we do
// not want to enable cors when developing an indepedent
// self-contained program.

server.get('/', (req, res) => {
    res.json({message: `Welcome to the API Home ${process.env.GUEST}`});
})

server.get('/dashboard', (req, res) => {
    res.json({message: `Welcome ${process.env.USER}`});
})

server.use((err, req, res, next) => {
   res.status(res.statusCode || 500).json({
       error: err.message,
       message: "something went wrong, try again"
   })
})

module.exports = server;

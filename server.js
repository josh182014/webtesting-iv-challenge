const express = require('express');

const instructorsRouter = require('./instructors/instructors-router')

const server = express();
server.use(express.json());

server.use('/api/instructors', instructorsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;

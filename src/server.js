'use strict';

const express = require('express');
const cors = require('cors');

// Create server instance
const server = express();

// Server config
server.use(cors());

server.get('/', (req, res) => {
  res.set('content-type', 'text/html');
  res.status(200).send('Ok');
});

module.exports=server;
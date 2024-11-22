'use strict';

const express = require('express');
const cors = require('cors');

// Create server instance
const server = express();

// Server config
server.use(cors());

server.get('/', (req, res) => {
  res.send('Ok');
});

module.exports=server;
'use strict';

const express = require('express');
const cors = require('cors');

// Get and check env vars.

const SERVER_HOSTNAME = process.env['SERVER_HOSTNAME'];
const SERVER_PORT = process.env['SERVER_PORT'];

const SERVER_HOST =
  SERVER_HOSTNAME === 'localhost' || SERVER_HOSTNAME.startsWith('127.')
    ? `http://${SERVER_HOSTNAME}:${SERVER_PORT}`
    : `https://${SERVER_HOSTNAME}`;

// Create server instance
const server = express();

// Server config
server.use(cors());


server.listen(SERVER_PORT, () => {
  console.log(`Server listening at <${SERVER_HOST}>.`);
});
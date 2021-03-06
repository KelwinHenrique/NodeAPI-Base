const port = 3008;

const bodyParser = require('body-parser');
const express = require('express');
const queryParser = require('express-query-int');

const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser())

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;

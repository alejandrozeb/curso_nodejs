const express = require('express');
const server = express();
//midlewares
server.use(express.json());
server.use(express.static(__dirname+"../public"));
module.exports = server;

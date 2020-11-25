//administra las librerias

const server = require('./server');

const {PORT} = require("./config");

server.listen(PORT, () =>{
    console.log(`codingApp backend runnig on port: ${PORT}`);
});
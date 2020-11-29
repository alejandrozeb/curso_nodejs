//administra las librerias

const server = require('./server');
const {PORT,MONGO_URI} = require("./config");

const mongoose= require('mongoose');
//mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
mongoose.conect('mongodb://localhost', { useUnifiedTopology: true });

server.listen(PORT, () =>{
    console.log(`codingApp backend runnig on port: ${PORT}`);
});
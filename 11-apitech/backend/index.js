//administra las librerias

const server = require('./server');
const {PORT,MONGO_URI} = require("./config");

const mongoose= require('mongoose');
//mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology:true});
mongoose.connect('mongodb://localhost', { useUnifiedTopology: true })
.then(()=>{
    server.listen(PORT, () =>{
        console.log(`CodingApp backend runnig on port ${PORT}`);
    });
})
.catch(console.log)

server.listen(PORT, () =>{
    console.log(`codingApp backend runnig on port: ${PORT}`);
});
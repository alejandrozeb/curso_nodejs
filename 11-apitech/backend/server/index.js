const express = require('express');
const server = express();
const cors = require("cors");
const {Technology} = require("../models");
const technologyModel = require('../models/technology.model');
//midlewares
server.use(express.json());
server.use(express.static(__dirname+"/../public"));
server.use(cors());

//endpoints
server.get("/api/technologies", async (req,res)=>{
    let technologies = await Technology.find();
    //console.log(technologies);
    technologies = technologies.map((technology)=>{
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    //añadimos la ruta del logo
    return res.send({error: false, data: technologies});//automaticamente detecta un 200
});
module.exports = server;

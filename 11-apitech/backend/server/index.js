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

server.get("/api/technology/:id", async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    let technology = await Technology.findById(id);
    console.log(technology);
    //console.log(technologies);
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    //añadimos la ruta del logo
    return res.send({error: false, data: technology});//automaticamente detecta un 200
});

server.get("/api/technology/search/:name", async (req,res)=>{
    const {name} = req.params;
    let technologies = await Technology.find({name:{$regex: new RegExp(name,"i")}});
    technologies = technologies.map((technology)=>{
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    //añadimos la ruta del logo
    return res.send({error: false, data: technologies});//automaticamente detecta un 200
});

server.get("/api/test", (req,res)=>{
    return res.send({error:true});
});

module.exports = server;

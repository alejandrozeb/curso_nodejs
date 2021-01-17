//es una funcion que se exportara usaremos json web token

const {sign} = require("jsonwebtoken"); //sirve para firma cada token

const {JWT_SECRET} = require("../config");

modules.exports.generateToken = function(user){
    return sign({user}, JWT_SECRET, {expiresIn:"4h"});//retorna un token con el nombre del usuario
}
const mongoose = require('mongoose');
//nos permite manejar
const {Schema} = mongoose;
//crear los atributos de la tabla podemos agregar alguna restriccion
const BreakingNewSchema = new Schema({
    title: {type: String},
    link: {type: String},

}, {timestamps:{createdAt: true, updatedAt:true}}
);
//time stamps agrega atributos a la tabla nos permite ver la fecha de creacion y fecha de actualizacion

module.exports = mongoose.model("BreakingNew", BreakingNewSchema);
//exportamos nuestro modelo

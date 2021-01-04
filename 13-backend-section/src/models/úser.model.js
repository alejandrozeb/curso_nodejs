const mongoose = require('mongoose');
const { Schema } = mongoose;

const {compareSync, hashSync, genSaltSync} = require("bcryptjs");

//compare sync ayuda a comparar las contraseñas
//hashsyncs ayua a acrea unhac
//ayuda a crear un salt que se agrega a la contraseña

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//metodos


module.exports= mongoose.model('user', UserSchema);
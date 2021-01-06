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

UserSchema.methods.toJSON = function(){
    let user= this.toObject();
    delete user.password;
    return user;
};

//hooks

UserSchema.methods.comparePasswords = function(password){
    return compareSync(password, this.password);
}


//este es un hook para que cada vez se guarde un documento con mongo
UserSchema.pre("save",async function(next){
    const user = this; //corresponde al elemento que se esta procesando

    //validando la contraseña
    if(!user.isModified("password")){
        return next();
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});
//antes que se guarde ejecutadra una funcion asyncronica
//metodos


module.exports= mongoose.model('user', UserSchema);
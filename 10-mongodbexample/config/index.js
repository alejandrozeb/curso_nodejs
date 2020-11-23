//validamos el ambiente de desaroolo

if(process.env.NODE_ENV !== "produccion"){  //si estamos en produccion o desarrollo
    require('dotenv').config();//trae la variables de entorno en .env
}
//exportamos nuestra variable de entorno
module.exports = {
    MONGO_URI: process.env.MONGO_URI    
};
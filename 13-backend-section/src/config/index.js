if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports={
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
};
//creamos un container para la injeccion de dependencias

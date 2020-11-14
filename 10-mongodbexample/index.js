const mongoose = require('mongoose');   //importando moongose
const connectionString = "mongodb+srv://alejandro:tigre003@cluster0.7xxfx.mongodb.net/db_test?retryWrites=true&w=majority"; //url de la pagina de mongobdatlas

mongoose.connect(connectionString,{useNewUrlParser:true});
//ya tenemos la coneccion
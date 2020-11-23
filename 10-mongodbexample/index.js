const mongoose = require('mongoose');   //importando moongose
/* const connectionString = "mongodb+srv://alejandro:tigre003@cluster0.7xxfx.mongodb.net/db_test?retryWrites=true&w=majority"; //url de la pagina de mongobdatlas */

const connectionString="";
//traemos la variable de entorno
const {MONGO_URI} = require('./config/index')

mongoose.connect(MONGO_URI,{useNewUrlParser:true});
//ya tenemos la coneccion

const Cat = mongoose.model("Cat",{name: String});
//especificamos el modelo

const kitty = new Cat({name: 'Galfield'});  //cremos la data
kitty.save()    //guarda en la bd
.then(() => console.log("cat has been saved"));         //regresa una promesa

Cat.find().then(console.log);   //imprime todo, es asincrono esta linea puede ejecutarse primero
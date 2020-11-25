const mongoose = require('mongoose');   //importando moongose 1
/* const connectionString = "mongodb+srv://alejandro:tigre003@cluster0.7xxfx.mongodb.net/db_test?retryWrites=true&w=majority"; //url de la pagina de mongobdatlas */

//traemos la variable de entorno
const {MONGO_URI} = require('./config/index'); //2

const axios = require('axios').default;
//para buscar entre las etiquetas
const cheerio = require('cheerio');
const cron = require("node-cron");
mongoose.connect(MONGO_URI,{useNewUrlParser:true}); //3
const {BreakingNew} = require("./models");
//usando cron
//recibe un cron expresion que determina cada cuanto se ejecutara el callback y el siguiente es una callback que se ejecutara
//0 */4 * * * cada 4 horas
//* * * * * * cada minuto
cron.schedule("* * * * * *", async () => {
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $= cheerio.load(html.data);   //convierte la data
    const titles = $(".news__title");
    titles.each((index,element) => {
         const breakingNew = {
             title: $(element).text().toString(),
             link: $(element).children().attr("href")
         };
         //console.log(breakingNew);
         BreakingNew.create([breakingNew]);
    });
    console.log('cron job executed');
});










//ya tenemos la coneccion cone stas 3 lineas(1,2,3)
//funcion anonima
    //const html =await axios.get("https://cnnespanol.cnn.com/");
    //const $= cheerio.load(html.data);   //convierte la data
    //const titles = $(".news__title");
    //titles.each((index,element) => {
         //const breakingNew = {
            // title: $(element).text().toString(),
          //   link: $(element).children().attr("href")
        // };
      //   console.log(breakingNew);
    //});//es un for


//webscrapping a la pagina de cnn
//const html = axios.get("https://cnnespanol.cnn.com/");//tae la pagina html en una promesa

//html.then(data => {
  //  console.log(data);
//});


























//FORMA NATIVA
//const Cat = mongoose.model("Cat",{name: String});
//especificamos el modelo

//const kitty = new Cat({name: 'Galfield'});  //cremos la data
//kitty.save()    //guarda en la bd
//.then(() => console.log("cat has been saved"));         //regresa una promesa

//Cat.find().then(console.log);   //imprime todo, es asincrono esta linea puede ejecutarse primero


const path = require('path');
//db
const DB_PATH = path.join(__dirname + '/../data/db.json');
let db = require(DB_PATH);
//file system para leer
const fs = require('fs');

function render(file,res){
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`))
    //renderizamos la vista
}
class QuotesController{
    async index(req,res){

        return render("quotes",res);
    }

}
module.exports = new QuotesController();
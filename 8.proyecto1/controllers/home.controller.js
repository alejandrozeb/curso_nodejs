const path = require('path');
function render(file,res){
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`))
    //renderizamos la vista
}
class HomeController{
    async index(req,res){
       // return res.send({message : "Hello world!"});
        //queremos que se renderize la view home
        return render("home",res);
    }

    async about(req,res){
         return render("about",res);
    }
}
module.exports = new HomeController();
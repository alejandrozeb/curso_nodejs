let _homeService= null;
//awillix le injecta los que necesita la clase homeservice

class HomeController{
    constructor({HomeService}){
        _homeService= HomeService;//debe tener el mismo nombre de startup
    }
    //metodo
    index(req,res){
        return res.send(_homeService.index());
    }
}

module.exports = HomeController;
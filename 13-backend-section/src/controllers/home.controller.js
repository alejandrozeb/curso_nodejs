let _homeService= null;
//awillix le injecta los que necesita la clase homeservice

class HomeController{
    constructor({HomeService}){
        _homeService= HomeService;
    }
    //metodo
    index(req,res){
        return res.send(_homeService.index());
    }
}

module.exports = HomeController;
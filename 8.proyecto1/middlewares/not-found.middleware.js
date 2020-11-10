module.exports = function(req,res,next){
    //el next da paso al siguiente middleware
    return res.status(404).send({message: "Page not found!"});
};
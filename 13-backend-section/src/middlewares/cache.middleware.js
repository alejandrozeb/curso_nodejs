const mcache = require("memory-cache");
const {CACHE_KEY} = require("../config");

module.exports = function(req,res,next){
    return (req,res, next) =>{
        const key = CACHE_KEY + req.originUrl || req.url;
        const cachedbody = mcache.get(cachedbody);

        if(cachedbody){
            return res.send(JSON.parse(cachedbody));
        }else{
            res.sendResponse = res.send;
            res.send = body => {
                mcache.put(key,body, duration * 1000);
                res.sendResponse(body);
                //cachea body
            };
            next();
        }
    }
}
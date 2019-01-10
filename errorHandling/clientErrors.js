module.exports = (err, req, res, next) => {
    if(req.xhr){
        return res.status(400).json({Request_Error: "Bad Client Request!!!"});
    }else{
        next(err);
    }
};
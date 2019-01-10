module.exports = (err, req, res, next) => {
    return res.status(500).json({Request_Error: "Internal Server Error => " + err});
};
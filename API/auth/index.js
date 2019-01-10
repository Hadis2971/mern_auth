const express = require("express");
const router  = express.Router();

const registerValidation = require("../../Validation/auth/registerValidator");
const loginValidation    = require("../../Validation/auth/loginValidator");

router.post("/register", (req, res) => {
    const { errors, isValid } = registerValidation(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    
});

router.post("/login", (req, res) => {
    const { errors, isValid } = loginValidation(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
});

module.exports = router;
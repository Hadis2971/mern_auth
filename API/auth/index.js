const express = require("express");
const router  = express.Router();
const User    = require("../../Models/user");

const registerValidation = require("../../Validation/auth/registerValidator");
const loginValidation    = require("../../Validation/auth/loginValidator");

router.post("/register", (req, res, next) => {
    const { errors, isValid } = registerValidation(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            res.status(400).json({Registration_Error: "Email Already in Use"});
        }else{
            let newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        
            User.hashPassword(newUser, (newUser) => {
                newUser.save()
                .then((user) => res.json(user))
                .catch(next);
            });        
        }
    })
    .catch(next);
});

router.post("/login", (req, res) => {
    const { errors, isValid } = loginValidation(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
});

module.exports = router;
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

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.hashPassword();
    newUser.save()
    .then((err, user) => res.json(user))
    .catch(next);

});

router.post("/login", (req, res) => {
    const { errors, isValid } = loginValidation(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
});

module.exports = router;
const express     = require("express");
const router      = express.Router();
const jwt         = require("jsonwebtoken");
const secretOrKey = require("../../Config/index").secretOrKey;
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

    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            return res.status(400).json({Login_Error: "Email Not Found!!!"});
        }else{
            bcrypt.compare(req.body.password, user.password, function(err, res) {
                if(!user){
                    return res.status(400).json({Login_Error: "Wrong Password!!!"});
                }else{
                    const payload = {
                        id: user.id,
                        name: user.name
                    };

                    jwt.sign(payload, secretOrKey, {expiresIn: 3600}, (err, token) => {
                        if(err) throw err;
                        else{
                            res.status(200).json({
                                login: "success",
                                token: "Bearer " + token
                            });
                        }
                    });
                }
            });
        }
        
    })

});

module.exports = router;
const Validator = require("validator");
const isEmpty   = require("is-empty");

module.exports = input => {
    let errors = {}, isValid = false;

    const name = isEmpty(input.name)? "" : input.name;
    const email = isEmpty(input.email)? "" : input.email;
    const password = isEmpty(input.password)? "" : input.password;
    const password2 = isEmpty(input.password2)? "" : input.password2;
    
    if(Validator.isEmpty(name)){
        errors.name = "The Name Field is Required!!!";
    };

    if(Validator.isEmpty(email)){
        errors.email = "The Email Field is Required!!!";
    }else if(!Validator.isEmail(email)){
        errors.email = "Please Enter a Valid Email Address!!!";
    };

    if(Validator.isEmpty(password)){
        errors.password = "The Password Field is Required!!!";
    }else if(!Validator.isLength(password, {min: 6, max: 15})){
        errors.password = "The Password Must be Between 6 and 15 Characters Long!!!";
    };

    if(Validator.isEmpty(password2)){
        errors.password2 = "The Confirm Password Field is Required!!!";
    }else if(!Validator.equals(password, password2)){
        errors.password2 = "The Confirm Password and Password Field Must Match!!!";
    };

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
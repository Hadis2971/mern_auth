const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const bcrypt   = require("bcryptjs");

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = module.exports = mongoose.model("User", usersSchema);

User.hashPassword = function(user, cb){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) throw err;
            else{
                user.password = hash;
                cb(user);
            }
        });
    });
};
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

usersSchema.methods.hashPassword = function(){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(this.password, salt, function(err, hash) {
            if(err) throw err;
            else{
                this.password = hash;
            }
        });
    });
};

const User = module.exports = mongoose.model("User", usersSchema);


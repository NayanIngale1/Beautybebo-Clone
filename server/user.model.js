
const mongoose = require("mongoose")
const {validationResult} =require("express-validator")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema(

    {
        first_name:{type: String, required: true, unique: true,minlength:3,maxlength:15,trim:true,IsNotEmpty:true,
        
            // validate: {
            //     validator: function (v) {
            //         return /^[a-zA-Z]+$/.test(v);
            //     },
        },
        second_name:{type: String, required: true, unique: true,minlength:3,maxlength:10,IsNotEmpty:true},
        email: { type: String, required: true, unique: true, lowercase: true,uppercase:false },
        phone:{ type: String, required: true, unique: true },
        password: { type: String, required: true, }
    },

    {
        timestamps: true,
        versionKey: false,
    }

)

userSchema.pre("save", function (next)
{
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
}

)

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema)

module.exports = User;



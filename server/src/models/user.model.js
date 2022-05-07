
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(

    {
        first_name: { type: String, required: true },
        second_name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true, uppercase: false },
        phone: { type: Number, required: true },
        password: { type: String, required: true, },
        image: { type: String, required: false },
    },

    {
        timestamps: true,
        versionKey: false,
    }

)

userSchema.pre("save", function (next) {
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



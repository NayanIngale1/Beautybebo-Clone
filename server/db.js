const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://aauth:aauth123@cluster0.4jduz.mongodb.net/users?retryWrites=true&w=majority");
};
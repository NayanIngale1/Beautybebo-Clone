const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://adarshakhatua:2HPHZpSHYkfHit0a@cluster0.9f3au.mongodb.net/BEAUTI-BEBO");
}
module.exports = connect;
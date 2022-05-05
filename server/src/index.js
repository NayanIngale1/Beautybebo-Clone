const express = require("express");

const app = express();

const productController = require("./controllers/product.controller");

app.use("/products", productController);

module.exports = app;

const express = require("express");

const router = express.Router();

const Product = require("../models/product.model")

router.get("/", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 24;
        const skip = (pagenumber - 1) * pagesize;
        const product = await Product.find().skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find().countDocuments() / pagesize);
        res.status(200).send({ product: product, totalpage: totalpage });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

router.get("/category/:category", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 18;
        const skip = (pagenumber - 1) * pagesize;
        const product = await Product.find({ category: req.params.category }).skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find({ category: req.params.category }).countDocuments() / pagesize);
        res.status(200).send({ product: product, totalpage: totalpage });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


router.get("/sub/:sub_category", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 6;
        const skip = (pagenumber - 1) * pagesize;
        const product = await Product.find({ sub_category: req.params.sub_category }).skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find({ sub_category: req.params.sub_category }).countDocuments() / pagesize);
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


router.get("/brand/:brand", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 6;
        const skip = (pagenumber - 1) * pagesize;
        const product = await Product.find({ brand: req.params.brand }).skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find({ brand: req.params.brand }).countDocuments() / pagesize);
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


router.get("/searchbyname/:name", async (req, res) => {
    try {

        const product = await Product.find({ name: req.params.name }).lean().exec();
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

router.get("/skin/:skin_type", async (req, res) => {
    try {
        const pagenumber = req.query.pagenumber || 1;
        const pagesize = req.query.pagesize || 6;
        const skip = (pagenumber - 1) * pagesize;
        const product = await Product.find({ skin_type: req.params.skin_type }).skip(skip).limit(pagesize).lean().exec();
        const totalpage = Math.ceil(await Product.find({ skin_type: req.params.skin_type }).countDocuments() / pagesize);
        res.status(200).send({product:product,totalpage:totalpage});
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


module.exports = router;

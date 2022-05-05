const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
        category: { type: String, required: true },
        sub_category: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        ingredients: { type: String, required: true },
        price: { type: Number, required: true },
        strickthrough_price: { type: Number, required: true },
        brand: { type: String, required: true },
        about_the_brand: { type: String, required: true },
        origin: { type: String, required: true },
        name_of_mfg: { type: String, required: true },
        address_of_mfg: { type: String, required: true },
        Weight: { type: String, required: true },
        how_to_use: { type: String, required: true },
        review: { type: Number, required: true },    
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const Product = mongoose.model("product", productSchema);

module.exports = Product;
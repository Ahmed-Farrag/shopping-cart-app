const mongoose = require("mongoose");
const productSchema = require("../Schema/ProductSchema");
const Product = mongoose.model("product", productSchema);
module.exports = Product;

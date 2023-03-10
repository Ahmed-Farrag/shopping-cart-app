const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const Product = require("./Models/ProductModule");
const router = require("./Routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

// DB connect
const connectString = "mongodb://localhost/react-shopping-cart";
mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connection Done"));

// app.get("/api/products", async (req, res) => {
//   const products = await Product.find({});
//   res.send(products);
// });

// app.post("/api/products", async (req, res) => {
//   const newProduct = new Product(req.body);
//   const saveP = await newProduct.save();
//   res.send(saveP);
// });

// app.delete("/api/products/:id", async (req, res) => {
//   const deleteProduct = await Product.findByIdAndDelete(req.params.id);
//   res.send(deleteProduct);
// });

app.listen(5000, () => {
  console.log("Running Done");
});

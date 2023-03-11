const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

app.listen(5000, () => {
  console.log("Running Done");
});

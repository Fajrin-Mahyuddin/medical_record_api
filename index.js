const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const products = require("./src/routers/products");
const usersRoute = require("./src/routers/users/usersRoute");
const app = express();

app.use(bodyParser.json());

app.use("/", usersRoute);
app.use("/", products);

mongoose
  .connect(
    "mongodb://fajrin_mahyuddin:qwerty@149.129.255.131:27017/rekam_medis_app"
  )
  .then(() => {
    app.listen(4000, () => console.log("Connection success..."));
  })
  .catch((err) => console.log(err));

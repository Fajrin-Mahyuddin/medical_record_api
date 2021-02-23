const bodyParser = require("body-parser");
const app = require("express").express();
const mongoose = require("mongoose");
const products = require("./src/routers/products");
const { authRoute } = require("./src/routers/auth/authRoute");

app.use(bodyParser.json());

app.use("/", authRoute, products);

mongoose
  .connect(
    "mongodb://fajrin_mahyuddin:qwerty@149.129.255.131:27017/rekam_medis_app"
  )
  .then(() => {
    app.listen(4000, () => console.log("Connection success..."));
  })
  .catch((err) => console.log(err));

const bodyParser = require("body-parser");
const express = require("express");
const products = require("./src/routers/products");

const app = express();

app.use(bodyParser.json());

app.use("/", products);

app.listen(4000);

const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/products");

router.post("/products/create", createProduct);
router.get("/products/list", getProducts);

module.exports = router;

const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/:id", getProduct);

router.get("/", getProducts);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;

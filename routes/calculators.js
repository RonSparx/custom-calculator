const express = require("express");
const route = express.Router();
const {
  getProducts,
  searchProduct,
  addNewCalculator,
  listCalculators,
  getCalculator,
  addNewSizes,
  getSizes,
  editSize,
  deleteSize,
  deleteCalculator,
  addNewProductCalc,
  getCalcProducts,
  deleteProductCalc,
} = require("../controller/calculator");

route.get("/shopify-products", getProducts);
route.get("/search-product", searchProduct);
route.get("/list-calculator", listCalculators);
route.get("/get-calculator", getCalculator);
route.post("/add-calculator", addNewCalculator);
route.post("/delete-calculator", deleteCalculator);
route.post("/add-sizes", addNewSizes);
route.post("/edit-size", editSize);
route.post("/delete-size", deleteSize);
route.get("/sizes", getSizes);
route.post("/add-products", addNewProductCalc);
route.post("/delete-products", deleteProductCalc);
route.get("/getCalc-products", getCalcProducts);

module.exports = route;

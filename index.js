const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const ProductRoute = require("./routes/product.routes");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", ProductRoute);

// //GET
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const products = await Product.findById(req.params.id);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //POST
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //UPDATE
// app.patch("/api/products/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndUpdate(req.params.id, req.body);
//     const updatedProduct = await Product.findById(req.params.id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //DELETE
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted sucessfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//Mongo DB connection
mongoose
  .connect(
    "mongodb+srv://chetansandi4:CUcLDn0htWZHC47n@cluster0.8k52s.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

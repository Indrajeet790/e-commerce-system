const Product=require("../models/product")

// write code for create a  product
module.exports.createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({
        status: "Success",
        message: "Product Created Successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "failed to create product",
        error: error.message,
      });
    }
  };

  
//get product
module.exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ status: "success", products });
    } catch (error) {
      res.status(500).json({ status: "failed", error: error.message });
    }
  };
  
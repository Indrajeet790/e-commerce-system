const express=require("express")
const router=express.Router();
const productController=require("../controller/productController")

router.post("/create",productController.createProduct)
router.put("/update",productController.updateProduct)
router.get("/view",productController.findAllProduct)
router.delete("/delete",productController.createProduct)

module.exports=router;
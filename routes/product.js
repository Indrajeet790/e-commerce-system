const express=require("express")
const router=express.Router();
const productController=require("../controller/productController")

router.post("/create",productController.createProduct)
router.get("/get",productController.getAllProducts)
router.put("/update",productController.updateProduct)
router.delete("/delete",productController.deleteProduct)
router.get('/search', productController.searchProduct)

module.exports=router;
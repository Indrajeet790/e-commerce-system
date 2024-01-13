const express=require("express")
const router=express.Router();
const productController=require("../controller/productController")

router.post("/create",productController.createProduct)
router.get("/get",productController.getAllProducts)
router.put("/update/:productId",productController.updateProduct)
router.delete("/delete/:productId",productController.deleteProduct)
router.get('/search', productController.searchProduct)

module.exports=router;
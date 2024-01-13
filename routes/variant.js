const express=require("express")
const router=express.Router();
const variantController=require("../controller/variantsController")

router.post("/create",variantController.createVariant)
// router.put("/update",productController.updateProduct)
// router.get("/view",productController.findAllProduct)
// router.delete("/delete",productController.createProduct)

module.exports=router;
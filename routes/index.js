const express=require("express")
const router=express.Router();


router.use("/product",require("./product"))
router.use("/variants",require("./variant"))

module.exports=router;
const Product=require("../models/product")

module.exports.createProduct=async(req,res)=>{
try{
    const{name,desc,price,variants}=req.body;
    const newProduct=await Product.create({
        name,
        desc,
        price,
        variants
    })

    res.stats(201).json(newProduct)

}catch(err){
res.status(500).json({err:"Internal Server error"})
}

}
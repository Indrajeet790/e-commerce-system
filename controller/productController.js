const Product=require("../models/product")

module.exports.createProduct=async(req,res)=>{
try{
    const{name,desc,price,variants}=req.body;
    const Product=await Product.create({
        name,
        desc,
        price,
        variants
    })

    res.stats(201).json(Product)

}catch(err){
res.status(500).json({err:"Internal Server error"})
}

}
module.exports.updateProduct=async(req,res)=>{
try{
    const{name,desc,price,variants}=req.body;
    const updatedProduct=await Product.findByIdAndUpdate(
        req.params.productId,
        {
            name,desc,price,variants
        },
        {new:true}
        );
        res.status(200).json(updatedProduct);
}catch(err){
res.status(500).json({err:"server error"})
}
}
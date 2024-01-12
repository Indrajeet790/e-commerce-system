const Product=require("../models/product")


// create a new product
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
// update a product
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

// delete a product code
module.exports.deleteProduct=async(req,res)=>{
try{
    const deletedProduct=await Product.findByIdAndDelete(
        req.params.productId,
        );
        res.status(200).json(deletedProduct);
}catch(err){
res.status(500).json({err:"server error"})
}
}
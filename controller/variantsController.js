const Variant=require("../models/variant")
const Product=require("../models/product");


module.exports.createVariant=async(req,res)=>{
    try{
        const productId=req.params.productId
        const {name,sku,additionalCost,stockCount}=req.body;
        const product= await Product.find((p)=>p.id=== productId);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        // create a new variant
        const newVariant=await Variant.create({
            name,
            sku,
            additionalCost,
            stockCount
        })
        product.variants.push(newVariant)
        res.status(201).json(newVariant)

    }catch(err){
        res.status(500).json({err:"server error"})
    }
}

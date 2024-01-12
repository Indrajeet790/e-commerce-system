const mongoose = require("mongoose");
const variantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    additionalCost: {
      type: Number,
      default:0,
    },
    stockCount: 
      {
        type:Number,
        default:0
      },
  },
  { timestamps: true },
);

const Variant = mongoose.model("variant", variantSchema);
module.exports =Variant

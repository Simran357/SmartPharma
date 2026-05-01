
const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductSku: {
    type: String,
    required: true,
  },
  ProductCategory: {
    type: String,
    required: true,
  },
  ProductQuantity: {
    type: Number,
    required: true,
  },
  ProductExpiryDate: {
    type: Date,
    required: true,
  },
   ProductBatchNo: {
    type: Number,
    required: true
  },
  ProductPrice: { 
    type: Number, 
    required: true
   },
  ProductMfgDate: { 
    type: Date, 
    required: true 
  }}, 
{ timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);
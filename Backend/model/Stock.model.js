const mongoose = require("mongoose")
const stockSchema = new mongoose.Schema({
 supplierName: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  poRef: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Stock", stockSchema);    

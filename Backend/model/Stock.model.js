const mongoose = require("mongoose")
const stockSchema = new mongoose.Schema({
   userId: {
    type: String,
  },
  supplierName: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  date:  Date ,
  dueDate: Date ,
  poRef: String,
  gstin: String,
  dlNo: String,
  phone: String,
  address: String,
  items: [
    {      
      name: String,
      hsn: String,
      batch: String,
      pack: String,
      qty: Number,
      mrp: Number,
      rate: Number,
      gst: Number,
      amount: Number,
      expiry: Date,
    },
  ],

  totals: {
  subTotal: Number,
  gst: Number,     // ADD THIS
  cgst: Number,
  sgst: Number,
  grandTotal: Number,
},
}, { timestamps: true });

module.exports = mongoose.model("Stock", stockSchema);    

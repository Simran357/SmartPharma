// WholesalerCourier.js
const mongoose = require("mongoose");

const connectCourier = new mongoose.Schema({
 wholesalerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    required: true,
  },
});
 
module.exports = mongoose.model("WholesalerCourier",connectCourier);   
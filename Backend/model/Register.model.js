const mongoose = require("mongoose")

const RegisterModel = new mongoose.Schema({
  username: {
    type: String,
  },
               
  email: {
    type: String,
    required: true,
  },
                        
  password: {
    type: String,
  },
  pharmacyName:{
   type: String,
  },
  contact: {
    type: String,
    // required: true,
  },
  license: {
    type: String
  },
  location:{
    type: String
  },
  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local",
  },
  
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Retailer", "Wholesaler", "User"],
    default: "User"
  }

}, { timestamps: true })

module.exports = mongoose.model("RegisterModel", RegisterModel)  
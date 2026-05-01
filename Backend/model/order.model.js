const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: () => Date.now().toString(),
    },
    retailerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "registerSchema",
},
    wholesalerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "wholesaler",
    },
    items: [
        {
            productId: String,
            name: String,
            price: Number,
            quantity: Number,
            image: String,
            expiryDate: Date,
            name: String,
            hsn: String,
            batch: String,
            pack: String,
            mrp: Number,
            expiry: Date,
        },
    ],
    customer: {
        name: String,
        phone: String,
        email:String,
        address: String,
    },

    courier: {
        id: String,
        name: String,
        time: String,
    },
    subtotal: {
        type: Number,
    },

    shipping: {
        type: Number,
        default: 0,
    },

    cgst: {
        type: Number,
        default: 0,
    },

    sgst: {
        type: Number,
        default: 0,
    },

    discount: {
        type: Number,
        default: 0,
    },

    total: {
        type: Number,
        required: true,
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "Card", "UPI", "Stripe"],
        required: true,
    },
  paymentStatus: {
    type: String,
    enum: ["Paid", "Pending", "Failed"],
    default: "Paid",
},
   status: {
  type: String,
  enum: [
    "PLACED",
    "CONFIRMED",
    "PACKED",
    "READY_FOR_DISPATCH",
    "DISPATCHED",
    "IN_TRANSIT",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
  ],
  default: "PLACED",
},

    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("orderSchema", orderSchema);
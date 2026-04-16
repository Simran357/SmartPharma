const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: () => Date.now().toString(),
    },

    items: [
        {
            productId: String,
            name: String,
            price: Number,
            quantity: Number,
            image: String,
        },
    ],

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

    status: {
        type: String,
        enum: ["Pending", "Paid", "Failed", "Shipped", "Delivered"],
        default: "Pending",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports =mongoose.model("orderSchema", orderSchema);

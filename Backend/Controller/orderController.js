const orderModel=require("../model/order.model")
const order = async (req,res, next) => {
    try {
        const orderData = req.body;
        console.log("order",req.body)
        const newOrder = new orderModel({
           orderId: orderData.id,
            wholesalerId:orderData.wholesalerId,
            items: orderData.items,
            total: orderData.total,
            paymentMethod: orderData.paymentMethod || "Stripe",
            status: "Paid",
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order saved successfully",
            order: newOrder,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};


module.exports = order



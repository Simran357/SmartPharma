const orderModel = require("../model/order.model")
const order = async (req, res, next) => {
    try {
        const orderData = req?.body;
        console.log("BODY:", req?.body);
        console.log("ITEMS:", req?.body?.items);

        req.body.items.forEach((item, i) => {
            console.log(`Item ${i}:`, item);
            console.log("price:", item.price, "type:", typeof item?.price);
            console.log("quantity:", item.quantity, "type:", typeof item?.quantity);
        });
        const newOrder = new orderModel({
            orderId: orderData.id,
            wholesalerId: orderData.wholesalerId,
            items: orderData.items,
            total: orderData.total,
            paymentMethod: orderData.paymentMethod || "Stripe",

            // ✅ NEW
            customer: orderData.customer,
            courier: orderData.courier,
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
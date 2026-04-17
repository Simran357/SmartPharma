const OrderModel = require("../model/order.model");

const getWholesalerOrders = async (req, res) => {
  try {
    const wholesalerId = req.user.id; // token se aayega

    const orders = await OrderModel.find({ wholesalerId });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

module.exports = getWholesalerOrders
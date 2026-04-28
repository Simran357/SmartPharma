const orderModel = require("../model/order.model");

const getRetailerOrders = async (req, res) => {
  try {
    const { id } = req.params;

    const orders = await orderModel
      .find({ retailerId: id })
      .sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getRetailerOrders;
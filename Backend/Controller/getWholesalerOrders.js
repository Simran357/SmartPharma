const orderSchema = require("../model/order.model");

const getWholesalerOrders = async (req, res) => {
  try {
    const wholesalerId = req?.user?.id;

    console.log("wholesalerId:", wholesalerId);

    const orders = await orderSchema
      .find({ wholesalerId })   //  FIXED HERE
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders: orders || []
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getWholesalerOrders;
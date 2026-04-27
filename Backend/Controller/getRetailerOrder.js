const orderModel = require("../model/order.model");


const getRetailerOrder = async (req, res) => {
  try {
    const { id } = req?.params;

    console.log("Retailer ID:", id);

    // retailer ke sare orders
    const orders = await orderModel.find({
      retailerId: id,   // <-- yeh field check karo apne schema me
    });

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch retailer orders",
    });
  }
};

module.exports = getRetailerOrder;
module.exports = getRetailerOrder;
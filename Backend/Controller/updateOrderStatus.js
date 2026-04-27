const orderModel = require("../model/order.model");

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    console.log("Updating:", id, status);

    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      { status },
{
  returnDocument: "after",
  runValidators: true,
}    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = updateOrderStatus;
const updateOrderStatus = async (req, res) => {
  try {
    const  id  = req.user.id;
    const { status } = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({
      message: "Status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status" });
  }
};

module.exports = { updateOrderStatus };
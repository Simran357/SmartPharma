const orderModel = require("../model/order.model");

const getOrderById = async (req, res) => {
  try {
    const userId = req?.user?.id;
    const { id } = req.params;
console.log("userid",req?.user?.id)
console.log("id",id)
    const order = await orderModel.findOne({
      _id: id,
userId:userId
    });


    console.log("order ",order)
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order: order,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error fetching order",
    });
  }
};

module.exports = getOrderById;
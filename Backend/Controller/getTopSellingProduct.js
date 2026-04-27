const OrderModel = require("../model/order.model");

const getTopSellingProducts = async (req, res) => {
  try {
    const orders = await OrderModel.find({
      wholesalerId: req.user.id   // ✅ important
    });

    const productMap = {};

    orders.forEach(order => {
      order.items.forEach(item => {
        const name = item.name.trim(); // remove extra space

        if (!productMap[name]) {
          productMap[name] = 0;
        }

        productMap[name] += item.quantity;
      });
    });

    // convert to array
    const result = Object.keys(productMap).map(name => ({
      name,
      totalSold: productMap[name]
    }));

    // sort descending
    result.sort((a, b) => b.totalSold - a.totalSold);

    // take top 5
    const topProducts = result.slice(0, 5);

    res.json({
      success: true,
      data: topProducts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports =  getTopSellingProducts ;
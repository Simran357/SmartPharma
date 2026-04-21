
const orderSchema = require("../model/order.model");

const getLowStockItems = async (req, res) => {
  try {
    const orders = await orderSchema.find({});

    const LOW_STOCK_THRESHOLD = 5;

    const productMap = {};

    orders.forEach(order => {
      (order.items || []).forEach(item => {
        if (!productMap[item.productId]) {
          productMap[item.productId] = {
            productId: item.productId,
            name: item.name,
            totalSold: 0,
            stock: item.stock || 0, // current stock (important)
          };
        }

        productMap[item.productId].totalSold += item.quantity;
      });
    });

    const lowStockItems = Object.values(productMap).filter(
      item => item.stock <= LOW_STOCK_THRESHOLD
    );

    return res.json({
      success: true,
      lowStockItems,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
module.exports = getLowStockItems
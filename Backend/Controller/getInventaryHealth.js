const PurchaseModel = require("../model/Product.model");

const getInventoryHealth = async (req, res) => {
  try {
    const data = await PurchaseModel.find({ userId: req.user.id });
   console.log("api response ",data)
    let inStock = 0;
    let lowStock = 0;
    let outOfStock = 0;
    let totalItems = data.length;

    data.forEach(item => {
      if (item.ProductQuantity === 0) {
        outOfStock++;
      } else if (item.ProductQuantity <= 20) {
        lowStock++;
      } else {
        inStock++;
      }
    });

    // Convert to percentage
    const inStockPercent = totalItems
      ? ((inStock / totalItems) * 100).toFixed(0)
      : 0;

    const lowStockPercent = totalItems
      ? ((lowStock / totalItems) * 100).toFixed(0)
      : 0;

    const outStockPercent = totalItems
      ? ((outOfStock / totalItems) * 100).toFixed(0)
      : 0;

    res.json({
      success: true,
      data: {
        inStock,
        lowStock,
        outOfStock,
        totalItems,
        inStockPercent,
        lowStockPercent,
        outStockPercent
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getInventoryHealth;   
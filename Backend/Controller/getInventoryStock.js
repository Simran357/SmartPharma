const StockModel = require("../model/Stock.model");

const getInventoryStock = async (req, res) => {
  try {
    const stocks = await StockModel.find();
console.log("api getting hit of stock",stocks)
    // 🔥 Flatten all items
   

    res.status(200).json({
      success: true,
      data: stocks,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error fetching inventory",
    });
  }
};

module.exports = getInventoryStock;
const StockModel = require("../model/Stock.model");
const mongoose = require("mongoose")
const getInventoryStock = async (req, res) => {
  try {
    const userId = req?.user?.id;
    console.log(req?.user)
    console.log("get inventory stock uyser i", userId)
    const stocks = await StockModel.findById({userId: new mongoose.Types.ObjectId(userId)});
    console.log("api getting hit of stock", stocks)
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
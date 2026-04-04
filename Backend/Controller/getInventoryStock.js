const StockModel = require("../model/Stock.model");

const getInventoryStock = async (req, res) => {
  try {
    const stocks = await StockModel.find();
console.log("api getting hit of stock",stocks)
    // 🔥 Flatten all items
    const inventory = stocks.flatMap(stock =>
      stock.items.map(item => ({
        name: item.name,
        batch: item.batch,
        qty: item.qty,
        expiry: item.expiry,
        rate: item.rate,
        mrp: item.mrp,
        supplier: stock.supplierName,
        invoiceNumber: stock.invoiceNumber,
      }))
    );

    res.status(200).json({
      success: true,
      data: inventory,
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
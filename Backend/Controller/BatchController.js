const StockModel = require("../model/Stock.model");

const getBatches = async (req, res,next) => {
  try {
    const { name } = req.params;

    console.log("Searching for:", name);

    // Step 1: Find documents where item exists
    const stocks = await StockModel.find({
      "items.name": name
    });

    // Step 2: Extract only matching items (flatten)
    let batches = [];

    stocks.forEach((stock) => {
      stock.items.forEach((item) => {
        if (item.name === name) {
          batches.push({
            id: item.batch,
            name: item.name,
            expiry: item.expiry,
            qty: item.qty,
            price: item.rate,
            mrp: item.mrp,
            supplier: stock.supplierName,
            invoice: stock.invoiceNumber,
            date: stock.date
          });
        }
      });
    });

    console.log("RESULT:", batches);

    if (batches.length === 0) {
      return res.status(404).json({ message: "No batches found" });
    }

    res.status(200).json({
      message: "data fetched successfully",
      data: batches
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getBatches;
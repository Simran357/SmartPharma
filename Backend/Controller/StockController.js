const StockModel = require("../model/Stock.model");
const StockValidation = require("../Validation/StockValidation");

// ✅ ADD STOCK
const addStock = async (req, res) => {
  try {
    console.log("Incoming:", req.body);

    // ✅ Joi validation
    const { error, value } = StockValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const {
      supplierName,
      gstin,
      dlNo,
      phone,
      address,
      invoiceNumber,
      date,
      dueDate,
      poRef,
      items,
      totals,
    } = value;

    // ✅ Duplicate check
    const existing = await StockModel.findOne({ invoiceNumber });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Invoice already exists",
      });
    }

    // ✅ Create stock
    const newStock = await StockModel.create({
      supplierName,
      gstin,
      dlNo,
      phone,
      address,
      invoiceNumber,
      date,
      dueDate,
      poRef,
      items,
      totals,
    });

    return res.status(201).json({
      success: true,
      message: "Stock added successfully",
      data: newStock,
    });

  } catch (error) {
    console.error("ADD STOCK ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = addStock;
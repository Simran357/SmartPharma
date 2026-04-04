export const addStock = (req, res) => {
  try {
    const { supplierName, invoiceNumber, date, poRef } = req.body;

    console.log("Data received:", req.body);

    // basic validation
    if (!supplierName || !invoiceNumber) {
      return res.status(400).json({ message: "Missing fields" });
    }

    
    res.status(201).json({
      message: "Stock added successfully",
      data: { supplierName, invoiceNumber, date, poRef }
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getStock = async (req, res) => {
  try {
    const data = await Stock.find(); // DB se data
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
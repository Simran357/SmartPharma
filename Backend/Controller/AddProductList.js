const ProductModel = require("../model/Product.model");

const AddProductList = async (req, res) => {
  try {
    const userId = req?.user?.id;
    console.log("USER ID:", userId);
    console.log("BODY:", req.body);
const {
  ProductName,
  ProductSku,
  ProductQuantity,
  ProductCategory,
  ProductExpiryDate,
  ProductBatchNo,     // ✅ NEW
  ProductPrice,       // ✅ NEW
  ProductMfgDate      // ✅ OPTIONAL
} = req.body;

  if (
  !ProductName ||
  !ProductSku ||
  !ProductCategory ||
  !ProductQuantity ||
  !ProductExpiryDate ||
  !ProductBatchNo ||
  !ProductPrice
) {
  return res.status(400).json({ message: "All required fields missing" });
}

let ProductCheck = await ProductModel.findOne({
  ProductName,
  ProductBatchNo,
  userId
});
    if (!ProductCheck) {
      const newProduct = await ProductModel.create({
  userId,
  ProductName,
  ProductSku,
  ProductQuantity,
  ProductCategory,
  ProductExpiryDate,
  ProductBatchNo,   // ✅ NEW
  ProductPrice,     // ✅ NEW
  ProductMfgDate    // ✅ OPTIONAL
});

      return res.status(200).json({
        success: true,
        message: "medicine save successfully",
        data: newProduct
      });
    }

    if (ProductCheck) {
  ProductCheck.ProductQuantity += Number(ProductQuantity);
  await ProductCheck.save();

  return res.json({
    success: true,
    message: "Stock updated",
    data: ProductCheck
  });
}
   

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = AddProductList;
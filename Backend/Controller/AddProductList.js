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
      ProductExpiryDate
    } = req.body;

    if (!ProductName || !ProductSku || !ProductCategory || !ProductQuantity || !ProductExpiryDate) {
      return res.status(400).json({ message: "All fields required" });
    }

    let ProductCheck = await ProductModel.findOne({
      ProductSku,
      ProductExpiryDate,
        userId

    });

    if (!ProductCheck) {
      const newProduct = await ProductModel.create({
        userId,
        ProductName,
        ProductSku,
        ProductQuantity,
        ProductCategory,
        ProductExpiryDate
      });

      return res.status(200).json({
        success: true,
        message: "medicine save successfully",
        data: newProduct
      });
    }

    return res.status(200).json({
      success: false,
      message: "Product already exists"
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = AddProductList;
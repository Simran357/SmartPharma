
const ProductModel = require("../model/Product.model");

const FetchProductList = async (req, res, next) => {
  try {
    const {id} = req.params
    console.log("fetch product list hits");
    console.log(id)

    const UserProducts = await ProductModel.find({ userId: id });
    console.log("UserProducts",UserProducts)

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: UserProducts,
    });

  } catch (error) {
    console.log("Fetch error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

module.exports = FetchProductList;
const Product = require("../model/Product.model");

const getExpiryProduct = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.json({
            success: true,
            data: products,
        });
    } catch (err) {  
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
module.exports = getExpiryProduct; 
const ProductModel = require("../model/Product.model")

const getProductlist = async (req, res, next) => {
    console.log(" getProductlist API HIT")
    try {
      const  {id} = req.params
        console.log("getproductlistid",id)
const ProductData = await ProductModel.find({ userId: id })
        if (ProductData) {
            console.log("DATA:", ProductData);
            res.status(200).json({data: ProductData})
        }

    }catch(err){ 
            console.log(err)
            res.status(400).json({ message: "not getting ProductData  from mongodb collection" })
        }
}

module.exports = getProductlist 
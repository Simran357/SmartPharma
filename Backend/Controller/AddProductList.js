const ProductModel = require("../model/Product.model")

const AddProductList= async (req,res,next)=>{
    console.log("Addproduct list hits")
    console.log(req.body)
    const {formData,auth} = req.body
    console.log(formData)
    const {ProductName,ProductSku,ProductQuantity,ProductCategory,ProductExpiryDate} = formData
    let ProductCheck = await ProductModel.findOne({ProductName:ProductName})
    if(!ProductCheck){
        ProductCheck = await ProductModel.create({
            userId:auth,
            ProductName:ProductName,
            ProductSku:ProductSku,
            ProductExpiryDate:ProductExpiryDate,
            ProductQuantity:ProductQuantity,
            ProductCategory:ProductCategory,

        })
    }



    res.status(200).json({message:"medicine save successfully"})

}

module.exports = AddProductList
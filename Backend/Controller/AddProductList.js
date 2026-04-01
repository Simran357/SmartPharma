const ProductModel = require("../model/Product.model")

const AddProductList= async (req,res,next)=>{

    console.log("Addproduct list hits")
   
     const { formData ,auth } = req.body;
console.log("auth",auth)
  const {
    ProductName,
    ProductSku,
    ProductQuantity,
    ProductCategory,
    ProductExpiryDate
  } = formData;

  let ProductCheck = await ProductModel.findOne({ ProductName });
    if(!ProductCheck){
        ProductCheck = await ProductModel.create({
           auth,
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
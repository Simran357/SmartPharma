const bcrypt = require("bcrypt")
const RegisterModel = require("../model/Register.model")
const RegisterValidation = require("../Validation/RegisterValidation")
const RegisterController = async (req,res,next)=>{
    console.log("registercontroller hit")
    const registerData = await RegisterValidation.validateAsync(req.body)

    //extract data
    const {username,password,email} = registerData
//validation
    const registerDataCheck =  await RegisterModel.findOne({
        email:email
    })

    if(registerDataCheck){
        return res.status(400).json({
            success:false, 
            message:"email already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const NewData = new RegisterModel({
        username:username,
        email:email,
        password:hashedPassword,
    })

    await NewData.save()

return res.status(200).json({
    success:true,
    message:"registration successfull"});


}
    module.exports = RegisterController;

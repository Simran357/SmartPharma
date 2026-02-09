const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken") 
const RegisterModel = require("../model/Register.model")
const RegisterValidation = require("../Validation/RegisterValidation")
const RegisterController = async (req,res,next)=>{
    console.log("registercontroller hit")
    const registerData = await RegisterValidation.validateAsync(req.body)

    //extract data
    const {username,password,confirmpassword} = registerData
//validation
    const registerDataCheck =  await RegisterModel.findOne({
        username:username
    })

    if(registerDataCheck){
        return res.status(400).json({
            success:false, 
            message:"email already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const jwtToken = jwt.sign({ username: username },"simran", { expiresIn: "1h" });

    const NewData = new RegisterModel({
        username:username,
        password:hashedPassword,
        confirmpassword:hashedPassword,
        token:jwtToken
    })

    await NewData.save()

return res.status(200).json({
    success:true,
    message:"registration successfull"});


}
    module.exports = RegisterController;

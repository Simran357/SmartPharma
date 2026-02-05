const RegisterModel = require("../model/Register.model")

const RegisterController = async (req,res,next)=>{
    console.log("registercontroller hit")
    const registerData = req.body

    //extract data
    const {username,password,confirmpassword} = registerData
//validation
    const registerDataCheck =  await RegisterModel.findOne({
        username:username
    })

    if(registerDataCheck){
        return res.json({status:"email already exists"})
    }
    const NewData = new RegisterModel({
        username:username,
        password:password,
        confirmpassword:confirmpassword
    })

    await NewData.save()
}
    module.exports = RegisterController

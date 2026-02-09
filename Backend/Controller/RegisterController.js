const bcrypt = require("bcrypt")

const RegisterModel = require("../model/Register.model")
const RegisterController = async (req,res,next)=>{
    console.log("registercontroller hit")
    const registerData = RegisterValidation.validateAsync(req.body)

    //extract data
    const {username,password,confirmpassword} = registerData
//validation
    const registerDataCheck =  await RegisterModel.findOne({
        username:username
    })

    if(registerDataCheck){
        return res.json({status:"email already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const jwtToken = jwt.sign(password, "simran", { expiresIn: "1h" });

    const NewData = new RegisterModel({
        username:username,
        password:hashedPassword,
        tokern:jwtToken
    })

    await NewData.save()

return res.status(200).json({
message:"registration successfull"
});
next(error)

}
    module.exports = RegisterController;

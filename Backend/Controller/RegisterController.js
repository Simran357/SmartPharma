const bcrypt = require("bcrypt")

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

    const hashedPassword = await bcrypt.hash(password,10)
    const NewData = new RegisterModel({
        username:username,
        password:hashedPassword,
    })

const jwtToken = jwt.sign({ id: NewData._id, username: username }, "simran", { expiresIn: "1h" });
    await NewData.save()

return res.status(200).json({
  token: jwtToken
});


}
    module.exports = RegisterController;

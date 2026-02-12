const jwt= require("jsonwebtoken")
const bcrypt = require("bcrypt")
const RegisterModel = require("../model/Register.model")
const LoginValidation = require("../Validation/LoginValidation")

const LoginController = async (req,res,next)=>{
    console.log("login controller hit")
    const loginData = await LoginValidation.validateAsync(req.body)
    const {email , password} = loginData
      console.log("email:", email);

    const user = await RegisterModel.findOne({
       email
    })

    if(!user){
        return res.status(400).json({
            success:true,
            message:"user does not exist"
        })
    }
const isMatch = await bcrypt.compare(password, user?.password)

   if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

     const token = jwt.sign(
      { password: user.password },
      "simran",
      { expiresIn: "1h" }
    );
    return res.status(200).json({
        success:true,
        message:"Login successfull",
        Token:token
    })

}

module.exports = LoginController
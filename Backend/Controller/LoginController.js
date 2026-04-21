const jwt= require("jsonwebtoken")
const bcrypt = require("bcrypt")
const RegisterModel = require("../model/Register.model")
const LoginValidation = require("../Validation/LoginValidation")

const LoginController = async (req,res,next)=>{
    console.log("login controller hit")
    try{
    const loginData = await LoginValidation.validateAsync(req.body)
    const {email , password} = loginData
     console.log("email:", email);
    const user = await RegisterModel.findOne({
       email:email
    })
                          
    if(!user){
        return res.status(404).json({
            success:false,
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


     const jwtToken = jwt.sign(
  {
    id: user._id,
    role: user.role
  },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
)

    res.cookie("jwtToken",jwtToken,
      { maxAge:86400000,
         httpOnly:true,
secure: false    })
    return res.status(200).json({
        success:true,
        message:" You successfully login in smartpharma Website",
         jwtToken:jwtToken
    })
  }catch(error){
    console.log("error in login controller",error)
    res.status(400).json({message:"error in login controller "})
  }
}

module.exports = LoginController
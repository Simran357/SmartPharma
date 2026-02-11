const jwt= require("jsonwebtoken")
const bcrypt = require("bcrypt")

const LoginController = async (req,res,next)=>{
    const loginData = req.body
    const {username , password} = loginData

    const user = await RegisterModel.findOne({
        username:username
    })

    if(!user){
        return res.status(400).json({
            success:true,
            message:"user does not exist"
        })
    }
const isMatch = await bcrypt.compare(password, user.password)

   if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

     const token = jwt.sign(
      { username: user.username },
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
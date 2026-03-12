const axios = require("axios")
const RegisterModel = require("../model/Register.model")
const jwt = require("jsonwebtoken")
const GoogleController = async (req,res,next)=>{
    try{
        console.log("body",req.body)
        const {accessToken} = req.body
        console.log("Access token",accessToken)
//get user info from google
        const googleRes = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
          { 
             headers:{
                Authorization:`Bearer ${accessToken}`
            }
        }
        )
         

    console.log("Google Data:", googleRes.data);
     const { email, name, picture } = googleRes.data;
   

 let user = await RegisterModel.findOne({ email });
    
       
        
        if (!user) { 
          user = await RegisterModel.create({
            name,
            email,
            avatar: picture,
            provider: "google",
          });
        }

        const token = jwt.sign({userId: googleRes.data }, "simran", { expiresIn: "1h" })
    
    
        res.status(200).json({
          message: "Google login success",
          token,
       
        });

    }catch (error) {
   next(error)
}
}

module.exports = GoogleController
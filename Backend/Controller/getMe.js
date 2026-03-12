
const jwt = require("jsonwebtoken")

const getMe = (req,res,next)=>{

  const token = req.cookies.jwtToken
console.log(req.cookies.jwtToken)
  if(!token){
    return res.status(401).json({
      message:"Unauthorized"
    })
  }

  const decoded = jwt.verify(token,"simran")

  res.json({
    user:decoded
  })


}


module.exports = getMe
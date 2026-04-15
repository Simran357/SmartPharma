const jwt = require("jsonwebtoken")

const getMe = (req, res, next) => {

  const token = req.headers.authorization?.split(" ")[1]
  console.log("balle ballee", token)
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }
  const decoded = jwt.verify(token, "simran")
  console.log("me api",decoded)
  res.json({
    user: decoded
  })
  next()
}
module.exports = getMe 
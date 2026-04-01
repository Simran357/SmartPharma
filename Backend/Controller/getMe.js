const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const decoded = jwt.verify(token,"simran")
console.log(decoded)
  res.json({
    user:decoded
  })


}


module.exports = getMe
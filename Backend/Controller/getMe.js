const jwt = require("jsonwebtoken")

const getMe = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    const decoded = jwt.verify(token, "simran")

    res.json({
      user:decoded
    })   // 🔥 sabse important line
               // 🔥 VERY IMPORTANT
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

module.exports = getMe
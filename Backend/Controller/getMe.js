const jwt = require("jsonwebtoken")

const getMe = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, "simran");
console.log("decoded",decoded)
  return res.json({
    user: decoded
  });
};

module.exports = getMe
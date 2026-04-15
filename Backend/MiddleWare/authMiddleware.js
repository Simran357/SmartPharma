const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "simran");
    req.user = decoded; // ✅ yaha set karo
    next();
  } catch(error){
    console.log("error in auth middleware",error)
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;  
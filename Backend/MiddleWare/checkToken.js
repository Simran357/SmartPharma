

const checkToken = (req, res, next) => {
    try {
        const jwtToken = req.headers.authoriztion?.split(" ")[1]
        if (!jwtToken) {
            return res.status(401).json({ message: "Unauthorized, Token Missing" });
        }
        const verifyToken = jwtToken.verify(jwtToken, "simran")
        console.log(verifyToken)
     return verifyToken
    }
    catch {
        (error) => {
            next(error)
        }
    }
}

model.exports = checkToken
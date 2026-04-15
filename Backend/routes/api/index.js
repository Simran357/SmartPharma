const router = require("express").Router()

const RegisterRoute = require("./RegisterRouter.route")
router.use("/registerroute",RegisterRoute)
console.log("api")
module.exports = router
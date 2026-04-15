const router = require("express").Router()


const api = require("./api/index")

router.use("/api",api)
console.log("router")
module.exports = router
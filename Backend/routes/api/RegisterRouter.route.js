const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
router.post("/registercontroller",RegisterController)
console.log("router.file")
module.exports = router
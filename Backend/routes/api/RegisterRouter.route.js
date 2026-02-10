const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")


router.post("/registercontroller",RegisterController)
router.get("/GetRegisterdata",GetRegisterdata)
console.log("router.file")
module.exports = router
const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")
const LoginController = require("../../Controller/LoginController")
const GoogleController = require("../../Controller/GoogleController")
const getMe= require("../../Controller/getMe")

router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
router.get("/me",getMe)
console.log("router.file")
module.exports = router 
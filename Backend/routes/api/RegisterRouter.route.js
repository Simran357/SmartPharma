const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")
const LoginController = require("../../Controller/LoginController")
const GoogleController = require("../../Controller/GoogleController")
const getMe= require("../../Controller/getMe")
const { getUsers, updateRoleController , createNewUser } = require("../../Controller/getUsers")
// const getUser=require("../../Controller/getUsers")
// const updateRoleController=require("../../Controller/updateRoleController")

router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
router.post("/createNewUser",createNewUser)
router.get("/getuserController",getUsers)
router.put("/updateRole/:id", updateRoleController)
router.get("/me",getMe)

console.log("router.file")
module.exports = router  
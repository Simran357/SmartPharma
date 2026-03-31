const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")
const LoginController = require("../../Controller/LoginController")
const GoogleController = require("../../Controller/GoogleController")
const getMe= require("../../Controller/getMe")
<<<<<<< HEAD
const { getUsers, updateRoleController , createNewUser } = require("../../Controller/getUsers")
=======
const { getUsers, updateRoleController } = require("../../Controller/getUsers")
const AddProductList = require("../../Controller/AddProductList")
>>>>>>> 39197d134d1c907c36b30de9a4d23fce34ad82fd
// const getUser=require("../../Controller/getUsers")
// const updateRoleController=require("../../Controller/updateRoleController")

router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
<<<<<<< HEAD
router.post("/createNewUser",createNewUser)
=======
router.post("/AddProductList",AddProductList)

>>>>>>> 39197d134d1c907c36b30de9a4d23fce34ad82fd
router.get("/getuserController",getUsers)
router.put("/updateRole/:id", updateRoleController)
router.get("/me",getMe)

console.log("router.file")
module.exports = router  
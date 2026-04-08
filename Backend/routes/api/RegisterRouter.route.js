const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")
const LoginController = require("../../Controller/LoginController")
const GoogleController = require("../../Controller/GoogleController")
const getMe= require("../../Controller/getMe")
const { getUsers, updateRoleController , createNewUser } = require("../../Controller/getUsers")
const AddProductList = require("../../Controller/AddProductList")
const getProductList =  require("../../Controller/getProductlist")
const getSingleRetailor=require("../../Controller/getSingleRetailorInfo")
const getsingleWholesaler = require("../../Controller/getsingleWholesaler")
const authMiddleware = require("../../MiddleWare/authMiddleware")
const addStock = require("../../Controller/StockController")
const getInventoryStock = require("../../Controller/getInventoryStock")
// const BatchController= require("../../Controller/BatchController")
const  getBatches  = require("../../Controller/BatchController")
router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
router.post("/createNewUser",createNewUser)
router.post("/AddProductList",authMiddleware,AddProductList)
//stock
router.post("/addStock", addStock);
router.get("/getSingleRetailor/:id",getSingleRetailor)
router.get("/getProductList/:id",getProductList)
router.get("/getsingleWholesaler/:id",getsingleWholesaler)
router.get("/getuserController",getUsers)
router.get("/getInventoryStock",getInventoryStock)

router.get("/batches/:name", getBatches)
router.put("/updateRole/:id", updateRoleController)

router.get("/me",getMe)

console.log("router.file")
module.exports = router  
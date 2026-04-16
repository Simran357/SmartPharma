const router = require("express").Router()

const RegisterController = require("../../Controller/RegisterController")
const GetRegisterdata = require("../../Controller/GetRegisterdata")
const LoginController = require("../../Controller/LoginController")
const GoogleController = require("../../Controller/GoogleController")
const getMe = require("../../Controller/getMe")
const {getUsers, updateRoleController , createNewUser}  = require("../../Controller/getUsers")
const AddProductList = require("../../Controller/AddProductList")
const  getProductList =  require("../../Controller/getProductlist")
const getSingleRetailor =require("../../Controller/getSingleRetailorInfo")
const getsingleWholesaler = require("../../Controller/getsingleWholesaler")
const authMiddleware = require("../../MiddleWare/authMiddleware")
const {addStock} = require("../../Controller/StockController")
const getInventoryStock = require("../../Controller/getInventoryStock")
const  getBatches  = require("../../Controller/BatchController")
const uploadInvoice = require("../../MiddleWare/uploadInvoice")
const aiOCRController = require("../../Controller/ocrParseControler")
const uploadInvoice = require("../../MiddleWare/uploadInvoice")
const aiOCRController = require("../../Controller/ocrParseControler")
const {stripePayment} = require("../../Controller/bill")
const order = require("../../Controller/orderController")
const getWholesalerOrders = require("../../Controller/getWholesalerOrders")

router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
router.post("/createNewUser",createNewUser)
router.post("/AddProductList/:id",authMiddleware,AddProductList)
//stock
router.post("/addStock",authMiddleware, addStock);
router.post("/billController", stripePayment);

router.post("/ocrparse",uploadInvoice.single("file"), aiOCRController);
router.post("/ocrparse",uploadInvoice.single("file"), aiOCRController);
router.get("/getSingleRetailor/:id",getSingleRetailor)
router.get("/getProductList/:id",getProductList)
router.get("/getsingleWholesaler/:id",getsingleWholesaler)
router.get("/getuserController",getUsers)
router.get("/getInventoryStock",authMiddleware,getInventoryStock)
router.get("/batches/:name", getBatches)
router.put("/updateRole/:id", updateRoleController)
router.get("/getWholesalerOrders",getWholesalerOrders)

//order
router.post('/orderController',order)
router.get("/me",authMiddleware,getMe)
console.log("router.file")
module.exports = router  

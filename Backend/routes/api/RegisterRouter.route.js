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
const {stripePayment} = require("../../Controller/bill")
const getRetailerOrders = require("../../Controller/getOrderHistory")

const order=require("../../Controller/orderController")

const addDeliveryPartner=require("../../Controller/addDeliveryPartner")
const getDeliveryPartners=require("../../Controller/getDeliveryPartners")
const connectCourier= require('../../Controller/connectCourier')
const getConnectedCouriers=require("../../Controller/getConnectedCourier")
const getWholesalerOrders = require("../../Controller/getWholesalerOrders")
const getLowStockItems  = require("../../Controller/getLowStockItems")
const updateOrderStatus = require("../../Controller/updateOrderStatus")
const getOrderById = require("../../Controller/getOrderById")
const {getDashboardStats ,inventaryImpulse} = require("../../Controller/getDashboardStats")
const getInventoryHealth = require("../../Controller/getInventaryHealth")
const getTopSellingProducts=require("../../Controller/getTopSellingProduct")
const getRetailerOrder = require("../../Controller/getOrderHistory")
const getExpiryProduct=require("../../Controller/getExpiryProduct")
const contactUs=require("../../Controller/contactUs")

router.post("/registercontroller",RegisterController)
router.post("/LoginController",LoginController)
router.get("/GetRegisterdata",GetRegisterdata)
router.post("/auth/google",GoogleController)
router.post("/createNewUser",createNewUser)
router.post("/AddProductList/:id",authMiddleware,AddProductList)
router.post("/addStock",authMiddleware, addStock);
router.post("/billController", stripePayment);




router.post("/ocrparse",uploadInvoice.single("file"), aiOCRController);
router.get("/getSingleRetailor/:id",getSingleRetailor)
router.get("/getProductList/:id",getProductList)
router.get("/getsingleWholesaler/:id",getsingleWholesaler)
router.get("/getuserController",getUsers)
router.get("/getInventoryStock",authMiddleware,getInventoryStock)
router.get("/batches/:name", getBatches)
router.put("/updateRole/:id", updateRoleController)
router.get("/getWholesalerOrders",authMiddleware,getWholesalerOrders)
router.get("/getOrderById/:id", getOrderById)
router.get("/getRetailerOrder/:id", getRetailerOrder)

router.get("/getLowStockItems", getLowStockItems)
router.post('/orderController',authMiddleware,order)   
router.get("/me",authMiddleware,getMe)
console.log("router.file")  
router.put('/updateOrderStatus/:id',updateOrderStatus)   


//delivery
router.post("/addDeliveryPartner",addDeliveryPartner)
router.get("/getDeliveryPartners", getDeliveryPartners)
router.post("/connectCourier",connectCourier)
router.get("/getConnectedCouriers",getConnectedCouriers)
router.get("/getOrderHistory/:id",getRetailerOrder)


router.get("/getDashboardStats",authMiddleware,getDashboardStats)
router.get("/inventaryImpulse",authMiddleware,inventaryImpulse)
router.get("/getInventoryHealth",authMiddleware,getInventoryHealth)
router.get("/getTopSellingProducts", authMiddleware,getTopSellingProducts)

router.get("/getExpiryProduct",getExpiryProduct)
router.post("/contactUs",contactUs)

module.exports = router  

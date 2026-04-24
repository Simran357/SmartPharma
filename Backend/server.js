const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])


const mongoose = require("mongoose")
const express = require("express")
const chief = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config();
const routes = require("./routes/index")


chief.use(express.json());

chief.use(express.urlencoded({ extended: true }));
chief.use(cookieParser())
chief.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","PUT","DELETE"],
credentials:true
}))

chief.use(routes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    const PORT = 5001;
    chief.listen(PORT)
    console.log("Mongo db connected successfull")
}).catch((err)=>{
console.log("failed to connect mongo db ", err)
})

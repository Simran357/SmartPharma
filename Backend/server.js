const mongoose = require("mongoose")
const express = require("express")
const chief = express()
const cors = require("cors")
const routes = require("./routes/index")

chief.use(express.json())

chief.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","PUT","DELETE"],
credentials:true
}))

chief.use(routes)

mongoose.connect("mongodb+srv://simran26788_db_user:De4LHTTcgawaBa9G@smartpharmacluster0.8tvj8as.mongodb.net/")
.then(()=>{
    const PORT = 5001;
    chief.listen(PORT)
    console.log("Mongo db connected successfull")
}).catch((err)=>{

console.log("failed to connect mongo db ", err)
})

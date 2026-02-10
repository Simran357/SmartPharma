const RegisterModel = require("../model/Register.model")

const GetRegisterdata = async (req, res, next) => {
    try {
    
        const registerData = await RegisterModel.find()
        if (registerData) {
            res.status(200).json({data: registerData})
        }

    }catch(err){
            console.log(err)
            res.status(400).json({ message: " not getting data from mongodb collection" })

        }
    

}

module.exports = GetRegisterdata
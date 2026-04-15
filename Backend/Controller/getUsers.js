const getUserModel = require("../model/Register.model")
const bcrypt = require("bcrypt")  

const createNewUser = async (req, res, next) => {

    try {
        console.log("form da data through body ", req.body)
        const { username, email, password, pharmacyName, contact, location, license, role } = req.body;


        // check existing user
        const existingUser = await getUserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashPw = await bcrypt.hash(password, 10)

        const newUser = new getUserModel({
            username,
            email,
            password: hashPw,
            pharmacyName,
            contact,
            license,
            location,
            role
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })
    } catch (error) {
        console.log(" eh error try di crate user de tym te ", error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const getUsers = async (req, res, next) => {
    try {
        const users = await getUserModel.find()
        //   console.log("users in get user controller", users)
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        console.log("error in get user controller")
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateRoleController = async (req, res, next) => {

    try {
        const { id } = req.params
        const { role } = req.body

        const updatedUser = await getUserModel.findByIdAndUpdate(
            id,
            { role },
            { new: true }
        )
        res.json({
            success: true,
            message: "Role updated successfully",
            data: updatedUser
        })

    } catch (error) {
        console.log("error in update role controller")
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}
module.exports = { getUsers, updateRoleController, createNewUser } 
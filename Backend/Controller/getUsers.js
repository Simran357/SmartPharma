const getUserModel = require("../model/Register.model")

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
module.exports = { getUsers, updateRoleController } 
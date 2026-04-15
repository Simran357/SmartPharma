const RegisterModel = require("../model/Register.model");

const getSingleRetailor = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await RegisterModel.findById(id);
        console.log("user in reatiler",user)
        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        console.log("error in get user controller", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getSingleRetailor;
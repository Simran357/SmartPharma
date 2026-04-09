const RegisterModel = require("../model/Register.model");

const getsingleWholesaler = async (req, res, next) => {
    console.log("getsingleWholesaler")
    try {
        const { id } = req.params;

        const user = await RegisterModel.findById(id)
        console.log("SingleWholesaler", user)
        if (user) {
            res.status(200).json({
                success: true,
                data: user
            });
        }
        res.status(404).json({ message: "user id doesn't exist" })
    } catch (error) {
        console.log("error in get user controller", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getsingleWholesaler;
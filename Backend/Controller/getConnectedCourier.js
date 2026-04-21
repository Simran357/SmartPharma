// GET /get-connected-couriers/:wholesalerId
const WholesalerCourier = require("../model/connectCourierModel");

const getConnectedCouriers = async (req, res) => {
    try {
        const { wholesalerId } = req.params;

        const data = await WholesalerCourier.find({ wholesalerId })
            .populate("courierId");

        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getConnectedCouriers 
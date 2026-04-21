const connectCourierModel = require("../model/connectCourierModel");

const ShippingRate = async (req, res) => {
  try {
    const { wholesalerId } = req.body;

    // 🔥 get connected couriers
    const data = await connectCourierModel
      .find({ wholesalerId })
      .populate("courierId");

    // 🔥 convert to same format (IMPORTANT)
    const formatted = data.map((item) => ({
      courier_company_id: item.courierId._id,
      courier_name: item.courierId.name,
      freight_charge: item.courierId.price || 100,
      estimated_delivery_days: item.courierId.deliveryDays || "3-5",
    }));

    return res.json({
      success: true,
      data: {
        available_courier_companies: formatted,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = ShippingRate; 
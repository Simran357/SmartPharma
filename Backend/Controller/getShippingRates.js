const axios = require("axios");
const { getToken } = require("./genrateShipingtoken"); // ✅ FIX IMPORT

const getShippingRates = async (req, res) => {
  try {
    const { pincode, weight } = req.body;

    const token = getToken(); // ✅ GET STORED TOKEN

    if (!token) {
      return res.status(500).json({ message: "Token not generated yet" });
    }

    const response = await axios.get(
      `https://apiv2.shiprocket.in/v1/external/courier/serviceability/`,
      {
        params: {
          pickup_postcode: "560001",
          delivery_postcode: pincode,
          weight: weight,
          cod: 0,
        },
        headers: {
          Authorization: `Bearer ${token}`, // ✅ CORRECT
        },
      }
    );

    res.status(200).json({
      message: "success shipping rate api",
      data: response.data,
    });

  } catch (err) {
    console.error("SHIPROCKET ERROR:", err.response?.data || err.message);

    res.status(500).json({
      message: "Shiprocket error",
      error: err.response?.data || err.message,
    });
  }
};

module.exports = getShippingRates;
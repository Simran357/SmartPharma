const axios = require("axios");

const getDistance = async (req, res) => {
  try {
    const { destinationPincode } = req.body;

    const origin = "560001";

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destinationPincode}&key=${process.env.Distance_API_KEY}`;

    const response = await axios.get(url);

    console.log("Google API Response:", response.data);

    if (
      !response.data.rows ||
      !response.data.rows[0].elements ||
      response.data.rows[0].elements[0].status !== "OK"
    ) {
      return res.status(400).json({
        message: "Invalid distance data",
        error: response.data,
      });
    }

    const distance =
      response.data.rows[0].elements[0].distance.value / 1000;

    res.json({ distance });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getDistance;
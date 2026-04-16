const axios = require("axios");

let shiprocketToken = "";

const generateToken = async () => {
  try {
    const res = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: process.env.SHIPROCKET_EMAIL,
        password: process.env.SHIPROCKET_API_PASSWORD,
      }
    );

    shiprocketToken = res.data.token;

    console.log("✅ Token Generated:", shiprocketToken);

  } catch (err) {
    console.error("❌ Auth Error:", err.response?.data);
  }
};

module.exports = {
  generateToken,
  getToken: () => shiprocketToken,
};
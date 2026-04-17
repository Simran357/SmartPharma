const connectCourierModel = require("../model/connectCourierModel");

const connectCourier = async (req, res) => {
  try {
    const { wholesalerId, courierId } = req.body;

    console.log("BODY:", req.body);

    const already = await connectCourierModel.findOne({
      wholesalerId,
      courierId,
    });

    if (already) {
      console.log("ALREADY EXISTS");
      return res.json({ message: "Already connected" });
    }

    const newConnection = await connectCourierModel.create({
      wholesalerId,
      courierId,
    });

    console.log("SAVED:", newConnection);

    res.json({ success: true, data: newConnection });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports=connectCourier  








const  deliveryPartnerModel=require("../model/addDeliveryPartnerSchema")

const addDeliveryPartner = async(req, res, next) => {
   try {
    const {
      name,
      type,
      coverage,
      time,
      email,
      mobileNumber,
      description,
      active,
    } = req.body;

    //  validation (basic)
    if (!name || !type || !coverage || !time || !email || !mobileNumber ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //  duplicate check (optional but recommended)
    const existing = await deliveryPartnerModel.findOne({ email });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Delivery partner already exists with this email",
      });
    }

    //  create in DB
    const partner = await deliveryPartnerModel.create({
      name,
      type,
      coverage,
      time,
      email,
      mobileNumber,
      description,
      active: active ?? true,
    });

    return res.status(201).json({
      success: true,
      message: "Delivery partner created successfully",
      data: partner,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = addDeliveryPartner;  

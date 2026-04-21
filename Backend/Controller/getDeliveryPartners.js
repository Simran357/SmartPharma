const  deliveryPartnerModel=require("../model/addDeliveryPartnerSchema")

const getDeliveryPartners = async (req, res,next) => {
  try {
    const partners = await deliveryPartnerModel.find();

    return res.status(200).json({
      success: true,
      data: partners,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = getDeliveryPartners ;   
const contactModel= require("../model/contactUsModel")

const contactUs=async(req,res,next)=>{
    try {
    const { name, email, message } = req.body;

    const newMessage = new contactModel({
      name,
      email,
      message
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Saved successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

module.exports =contactUs ;
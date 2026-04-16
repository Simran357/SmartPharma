const cloudinary = require("../config/Cloudnary");

const aiOCRController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // ✅ Convert buffer → base64 (ONLY ONCE)
    const base64 = req.file.buffer.toString("base64");

    const imageData = `data:${req.file.mimetype};base64,${base64}`;

    // ✅ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(imageData, {
      folder: "invoices",
    });

    // ✅ TODO: Replace with real OCR
    const extractedText = `
    ABC Pharma
    Paracetamol 10 50
    Crocin 5 30
    Total 650
    `;

    res.json({
      success: true,
      text: extractedText,
      imageUrl: result.secure_url,   // ✅ IMPORTANT
      public_id: result.public_id,  // optional
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "OCR failed" });
  }
};

module.exports = aiOCRController;
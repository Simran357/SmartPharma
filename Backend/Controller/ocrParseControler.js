// const vision = require("@google-cloud/vision");

// // ✅ ADD HERE (top of file)
// const client = new vision.ImageAnnotatorClient({
// keyFilename: "C:/Users/lovel/Desktop/gitSmartRepo/SmartPharma/Backend/key.json"});

// const aiOCRController = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const [result] = await client.textDetection(req.file.path);

//     const text = result.fullTextAnnotation?.text || "";

//     res.json({
//       success: true,
//       text,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = aiOCRController;
const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const aiOCRController = async (req, res) => {
    try {
        const filePath = req.file.path;
        console.log("file",filePath)
        // ✅ image → base64
        const base64Image = fs.readFileSync(filePath, {
            encoding: "base64",
        });
        // ✅ AI CALL
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `
Extract this invoice into STRICT JSON only.
Do not write anything else.

Format:
{
  "supplierName": "",
  "invoiceNumber": "",
  "date": "",
  "items": [
    {
      "name": "",
      "qty": 0,
      "rate": 0,
      "amount": 0
    }
  ],
  "totals": {
    "subTotal": 0,
    "gst": 0,
    "grandTotal": 0
  }
}
              `,
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`,
                            },
                        },
                    ],
                },
            ],
        });

        // ✅ AI RESPONSE
        let aiText = response.choices[0].message.content;

        // ❗ cleanup (important)
        aiText = aiText.replace(/```json|```/g, "").trim();

        // ✅ JSON parse
        const data = JSON.parse(aiText);
        console.log("api res ai ", data)
        // 👉 ab tu yaha DB save kar sakta hai
        // await Stock.create(data);

        res.status(200).json({
            success: true,
            data,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "OCR failed",
        });
    }
};

module.exports = aiOCRController;
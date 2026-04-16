const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(), // ✅ no file saved on disk
  limits: {
    fileSize: 5 * 1024 * 1024, // optional: 5MB limit
  },
});

module.exports = upload;
const express = require("express");
const router = express.Router();

const { getBatches } = require("../Controller/BatchController");

router.get("/", getBatches);

module.exports = router;
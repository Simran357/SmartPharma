const mongoose = require("mongoose")

const RegisterModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("RegisterModel", RegisterModel)
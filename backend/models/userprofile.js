const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    email: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    phoneNo: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    profile: {
        type: String, // Will store the URL of the uploaded image
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Profile", profileSchema);

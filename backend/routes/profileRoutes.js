const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { createProfile, getProfile } = require("../controllers/profileController");

// Create Profile
router.post("/create", upload.single("profile"), createProfile);

// Fetch Profile
router.get("/:id", getProfile);

module.exports = router;

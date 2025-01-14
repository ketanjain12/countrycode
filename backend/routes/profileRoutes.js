const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { createProfile, getProfile } = require("../controllers/profileController");

// Create Profile
router.post("/create", upload.single("profile"), createProfile);

// Fetch Profile
router.get("/:id", getProfile);

module.exports = router;

// new code jan 13
// const express = require("express");
// const router = express.Router();
// const upload = require("../middlewares/upload");
// const { createProfile, getProfile } = require("../controllers/profileController");

// /**
//  * @swagger
//  * /profile/create:
//  *   post:
//  *     summary: Create Profile - Create a new user profile
//  *     description: This API endpoint allows users to upload their profile information.
//  *     parameters:
//  *       - in: formData
//  *         name: profile
//  *         description: Profile image and details to be uploaded
//  *         required: true
//  *         type: file
//  *       - in: body
//  *         name: profileData
//  *         description: User profile details to be saved
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             name:
//  *               type: string
//  *             age:
//  *               type: integer
//  *             city:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Profile created successfully
//  *       400:
//  *         description: Invalid data provided
//  */

// /**
//  * @swagger
//  * /profile/{id}:
//  *   get:
//  *     summary: Fetch Profile - Get the profile details of a user
//  *     description: This API endpoint fetches the profile details of a user by their ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         description: User ID
//  *         required: true
//  *         type: string
//  *     responses:
//  *       200:
//  *         description: Profile fetched successfully
//  *       404:
//  *         description: Profile not found
//  */
// router.post("/create", upload.single("profile"), createProfile);
// router.get("/:id", getProfile);

// module.exports = router;

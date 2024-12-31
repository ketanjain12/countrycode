const Profile = require("../models/userprofile")
const User = require("../models/usermodels");
const mongoose = require("mongoose");

exports.createProfile = async (req, res) => {
    try {
        const { userId } = req.body;

        // Fetch user details from user schema
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // Save profile details with actual user details
        const profile = new Profile({
            name: user.name, 
            email: user.email, 
            phoneNo: user.phoneNo,
            profile: req.file.path, 
        });

        await profile.save();

        res.status(201).json({
            message: "Profile created successfully",
            profile,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.getProfile = async (req, res) => {
//     try {
//         const { _id } = req.params;

//         // Check if the 'id' is a valid ObjectId
//         // if (!mongoose.Types.ObjectId.isValid(id)) {
//         //     return res.status(400).json({ message: "Invalid profile ID" });
//         // }

//         // Fetch profile and populate related fields from 'User' model
//         const profile = await Profile.findById(_id).populate({
//             path: "name email phoneNo", // Fields in Profile schema that reference User model
//             model: "User",               // Reference to User model
//             select: "name email phoneNo", // Fields to return from User model
//         });

//         // If profile not found, return 404
//         if (!profile) {
//             return res.status(404).json({ 
//                 status: false,
//                 message: "Profile not found"
//             });
//         }

//         // If profile found, return the profile data
//         res.status(200).json({
//             message: "Profile fetched successfully",
//             profile,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

exports.getProfile = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the profile by _id
        const profile = await Profile.findById(id);

        // If profile not found, return 404
        if (!profile) {
            return res.status(404).json({ 
                status: false,
                message: "Profile not found"
            });
        }

        // If profile found, return the profile data
        res.status(200).json({
            message: "Profile fetched successfully",
            profile,
        });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ message: error.message });
    }
};
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Absolute path to 'uploads' folder
const uploadDir = path.join(__dirname, "uploads");  // __dirname gives the current directory path

// Ensure the 'uploads' directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir); // Create the folder if it doesn't exist
}

// Storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Use the absolute path to 'uploads' directory
    },
    filename: (req, file, cb) => {
        // Create unique filename
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// multer upload configuration
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit size to 5MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extName && mimeType) {
            return cb(null, true); // Valid file type
        } else {
            return cb(new Error("Only images are allowed"));
        }
    },
});

module.exports = upload;

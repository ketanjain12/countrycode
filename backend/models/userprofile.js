const mongoose = require("mongoose");
// const { dbconnect, connections } = require("../config/db"); // Make sure to import connections object

const profileSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    email: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    phoneNo: { type: mongoose.Schema.Types.String, ref: "User", required: true },
    profile: {
        type: String, // Will store the URL of the uploaded image
        required: true,
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model("Profile", profileSchema);// for use only single database
// module.exports = connections.countryCodeDB.model("Profile", profileSchema);// for use only double and multiple database

// dbconnect()
//   .then(() => {
//     if (connections.countryCodeDB) {
//       module.exports = connections.countryCodeDB.model("Profile", profileSchema);
//       console.log("Profile model initialized successfully.");
//     } else {
//       console.error("CountryCodeDB connection is not available!");
//     }
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database:", err.message);
//   });
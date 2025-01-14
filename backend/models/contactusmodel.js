const mongoose = require("mongoose");
// const { connections,dbconnect } = require("../config/db"); // Make sure to import connections object

const contactusSchema = new mongoose.Schema({
  // userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
    min: 1,
    max: 5,
  },
  Message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contactus", contactusSchema); // for use only single database
// module.exports = connections.countryCodeDB.model("contactus", contactusSchema);// for use only double and multiple database
// dbconnect()
//   .then(() => {
//     if (connections.countryCodeDB) {
//       module.exports = connections.countryCodeDB.model("contactus", contactusSchema);
//       console.log("User model initialized successfully.");
//     } else {
//       console.error("CountryCodeDB connection is not available!");
//     }
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database:", err.message);
//   });

const User = require("../models/usermodels");
const mongoose=require("mongoose");
// const { connections,dbconnect } = require("../config/db"); // Make sure to import connections object

const reviewSchema=new mongoose.Schema({
    // userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    name: 
    { 
        type: String, 
        required: true 
    },
    city: 
    { 
        type: String,
         required: true 
        },
    rating:
     { 
        type: Number,
         required: true, 
         min: 1, max: 5
         },
    reviewContent:
     {
         type: String,
          required: true
         },
    profilePicture: 
    {
         type: String,
          required: false 
    }

})
module.exports=mongoose.model("Review",reviewSchema) // for use only single database
// module.exports = connections.countryCodeDB.model("Review",reviewSchema);// for use only double and multiple database
// Check if connections.countryCodeDB is defined

// dbconnect()
//   .then(() => {
//     if (connections.countryCodeDB) {
//       module.exports = connections.countryCodeDB.model("Review",reviewSchema);
//       console.log("Review model initialized successfully.");
//     } else {
//       console.error("CountryCodeDB connection is not available!");
//     }
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database:", err.message);
//   });
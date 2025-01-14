const mongoose=require('mongoose');
// const { connections,dbconnect } = require("../config/db"); // Make sure to import connections object

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true,    
    },
    password:{
        type:String,
        required:true
    },
    // new filed added for otp
    resetCode: {
        type: String // Field to store the reset code
    },
    resetCodeExpiry: {
        type: Date // Field to store the expiry of the reset code
    }

})

module.exports = mongoose.model('User',userschema);// for use only single database

// extra code jan 9
// module.exports = connections.countryCodeDB.model('User',userschema);// for use only double and multiple database

// extra code for debug
// dbconnect()
  // .then(() => {
  //   if (connections.countryCodeDB) {
  //     module.exports = connections.countryCodeDB.model("User", userschema);
  //     console.log("User model initialized successfully.");
  //   } else {
  //     console.error("CountryCodeDB connection is not available!");
  //   }
  // })
  // .catch((err) => {
  //   console.error("Failed to connect to the database:", err.message);
  // });

 

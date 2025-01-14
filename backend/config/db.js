const mongoose=require("mongoose");
require("dotenv").config();
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,)
    .then(()=>{
        console.log("mongosse connection successfully done ")
    }).catch((error)=>{
       console.error("mongosse connection failed",error.message)
       process.exit(1);
    })
}
module.exports=dbconnect;

// new databases
// const mongoose = require("mongoose");
// require("dotenv").config();

// // Dono databases ke liye connections object banayenge
// const connections = {};

// const dbconnect = () => {
//   return new Promise((resolve, reject) => {
//     // 1st connection: countrycode database ke liye
//     connections.countryCodeDB = mongoose.createConnection(process.env.DATABASE_URL);

//     connections.countryCodeDB.on("connected", () => {
//       console.log("Connected to countrycode database successfully");
//       resolve();
//     });

//     connections.countryCodeDB.on("error", (error) => {
//       console.error("Failed to connect to countrycode database", error.message);
//       reject(error);
//     });

//     // 2nd connection: prehiretest database ke liye
//     connections.prehireTestDB = mongoose.createConnection(process.env.DATABASE_URL_PREHIRETEST);

//     connections.prehireTestDB.on("connected", () => {
//       console.log("Connected to prehiretest database successfully");
//     });

//     connections.prehireTestDB.on("error", (error) => {
//       console.error("Failed to connect to prehiretest database", error.message);
//     });
//   });
// };

// module.exports = { dbconnect, connections };


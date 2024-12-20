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
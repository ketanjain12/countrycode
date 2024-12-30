const User = require("../models/usermodels");
const mongoose=require("mongoose");

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
module.exports=mongoose.model("Review",reviewSchema)
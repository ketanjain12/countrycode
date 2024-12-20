const mongoose=require('mongoose');
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
        type:Number,
        required:true,
    //   validate:{
    //     validator:function (v){
    //         return /^\d{10}$/.test(v);
    //     },
    //     message:"MobileNumber must be a 10-digit number",
    //   },
    
    },

    password:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('User',userschema);
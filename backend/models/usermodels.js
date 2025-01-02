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

module.exports = mongoose.model('User',userschema);
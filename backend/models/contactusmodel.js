const mongoose = require("mongoose");

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
module.exports = mongoose.model("contactus", contactusSchema);

const {submitReview}=require("../controllers/reviewscontroller")

const express=require("express")
const router=express.Router();

router.post("/submitReview",submitReview)
module.exports=router;
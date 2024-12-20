const {signup,signin}=require("../controllers/usercontrollers")

const express=require("express")
const router=express.Router();

router.post('/signup',signup)
router.post('/signin',signin)


module.exports=router;
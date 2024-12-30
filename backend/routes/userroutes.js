const {signup,signin,getallusers}=require("../controllers/usercontrollers")

const express=require("express")
const router=express.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/getallusers',getallusers)


module.exports=router;
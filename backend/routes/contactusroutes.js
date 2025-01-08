const express = require('express');
const router=express.Router();
const {contactus}=require('../controllers/contactuscontroller');

router.post('/contactus',contactus)
module.exports = router;

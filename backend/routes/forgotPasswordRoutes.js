const express = require('express');
const { forgotPassword, verifyCode, resetPassword } = require('../controllers/forgotPasswordController');

const router = express.Router();

router.post('/forgotPassword', forgotPassword);
router.post('/verifyCode', verifyCode);
router.post('/resetPassword', resetPassword);

module.exports = router;

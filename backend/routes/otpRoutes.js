const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

// Route to send OTP
router.post('/send-otp', otpController.sendOtp);

// Route to verify OTP
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;

// jan 13 new code
// const express = require('express');
// const router = express.Router();
// const otpController = require('../controllers/otpController');

// /**
//  * @swagger
//  * /api/otp/send-otp:
//  *   post:
//  *     summary: Send OTP - Send a One-Time Password for verification
//  *     description: This API endpoint sends an OTP to the user's phone or email.
//  *     parameters:
//  *       - in: body
//  *         name: otpDetails
//  *         description: Details required to send OTP
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             phone:
//  *               type: string
//  *             email:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: OTP sent successfully
//  *       400:
//  *         description: Invalid phone/email format
//  */

// /**
//  * @swagger
//  * /api/otp/verify-otp:
//  *   post:
//  *     summary: Verify OTP - Verify the One-Time Password
//  *     description: This API endpoint verifies the OTP entered by the user.
//  *     parameters:
//  *       - in: body
//  *         name: otpDetails
//  *         description: OTP details for verification
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             otp:
//  *               type: string
//  *             phone:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: OTP verified successfully
//  *       400:
//  *         description: Invalid OTP
//  */
// router.post('/send-otp', otpController.sendOtp);
// router.post('/verify-otp', otpController.verifyOtp);

// module.exports = router;

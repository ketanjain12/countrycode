const express = require('express');
const { forgotPassword, verifyCode, resetPassword } = require('../controllers/forgotPasswordController');

const router = express.Router();

router.post('/forgotPassword', forgotPassword);
router.post('/verifyCode', verifyCode);
router.post('/resetPassword', resetPassword);

module.exports = router;

// new code jan 13
// const express = require('express');
// const { forgotPassword, verifyCode, resetPassword } = require('../controllers/forgotPasswordController');

// const router = express.Router();

// /**
//  * @swagger
//  * /forgotPassword:
//  *   post:
//  *     summary: Forgot Password - Request password reset
//  *     description: This API endpoint allows users to request a password reset link.
//  *     parameters:
//  *       - in: body
//  *         name: email
//  *         description: User email for password reset
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             email:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Password reset link sent
//  *       400:
//  *         description: Email not found
//  */

// /**
//  * @swagger
//  * /verifyCode:
//  *   post:
//  *     summary: Verify Code - Verify the password reset code
//  *     description: This API endpoint allows users to verify the reset code sent to their email.
//  *     parameters:
//  *       - in: body
//  *         name: code
//  *         description: Verification code sent to the user
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             code:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Code verified successfully
//  *       400:
//  *         description: Invalid code
//  */

// /**
//  * @swagger
//  * /resetPassword:
//  *   post:
//  *     summary: Reset Password - Change the password after code verification
//  *     description: This API endpoint allows users to reset their password after verifying the reset code.
//  *     parameters:
//  *       - in: body
//  *         name: password
//  *         description: New password to be set
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             password:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Password reset successfully
//  *       400:
//  *         description: Invalid password format
//  */
// router.post('/forgotPassword', forgotPassword);
// router.post('/verifyCode', verifyCode);
// router.post('/resetPassword', resetPassword);

// module.exports = router;

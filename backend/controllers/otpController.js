const client = require('../config/twilio');

// Temporary store for OTPs (use a database in production)
const otpStore = {};

// Send OTP function
exports.sendOtp = async (req, res) => {
  const { mobileNumber } = req.body;

  if (!mobileNumber) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Send OTP using Twilio
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobileNumber,
    });

    // Store OTP temporarily
    otpStore[mobileNumber] = otp;

    res.status(200).json({ 
        message: 'OTP sent successfully',
        otp:"otp is : ",otp
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

// Verify OTP function
exports.verifyOtp = (req, res) => {
  const { mobileNumber, otp } = req.body;

  if (!mobileNumber || !otp) {
    return res.status(400).json({ message: 'Mobile number and OTP are required' });
  }

  // Check if the OTP matches
  if (otpStore[mobileNumber] === otp) {
    delete otpStore[mobileNumber]; // Remove OTP after verification
    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
};

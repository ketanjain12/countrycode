const User = require('../models/usermodels');
const sendEmail = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generate random 5-digit code
const generateCode = () => Math.floor(10000 + Math.random() * 90000).toString();

// Forgot Password
exports.forgotPassword = async (req, res) => {

  const { email } = req.body;

  if(!email){
    res.status(400).json(
    {
            status: false, 
            msg: 'Please Enter Email'
    }
)
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(
        {
            status: false, 
            msg: 'User not found'
         }
        );
    }

    const resetCode = generateCode();

    user.resetCode = resetCode;

    user.resetCodeExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiry

    await user.save();

    await sendEmail(email, 'Password Reset Code', `
        Hlo ${user.name}
        This otp valid only 15 min .Ensure that fill otp on time 
        Your resetPassoword code is: ${resetCode}`);

    res.status(200).json(
        { 
            status: true, 
            msg: 'Reset code sent to email' ,
            resetcode:resetCode // only for test don't use in deploy time
        }
    );
  } catch (error) {

    console.error(error);

    res.status(500).json(
        {
         status: false,
          msg: 'Internal Server Error'+ error.message 
        }
    );
  }
};

// new code with email template 


// Verify Reset Code
exports.verifyCode = async (req, res) => {

  const { email, code } = req.body;

//   if(!email || !code){

//     return res.status(400).json(
//         { 
//             status: false, 
//             msg: 'fill both field' 
//         }
//       );
//   }

  try {
    const user = await User.findOne({ email });

    if (!user || user.resetCode !== code || Date.now() > user.resetCodeExpiry) {
      return res.status(400).json(
        { 
            status: false, 
            msg: 'Invalid or expired reset code' 
        }
      );
    }

    const token = jwt.sign(
        { id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' }
    );

    res.status(200).json(
        { 
            status: true,
             msg: 'Code verified', 
             token 
            }
        );

  } catch (error) {

    console.error(error);

    res.status(500).json(
        {
             status: false, 
             msg: 'Internal Server Error' 
        }
     );
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {

  const { token, password, confirmPassword } = req.body;

  if(!token || !password || !confirmPassword){

    return res.status(400).json(
        {
             status: false,
             msg: 'fill all details'
        }
    );

  }

  if (password !== confirmPassword) {

    return res.status(400).json(
        { 
             status: false,
             msg: 'Passwords do not match' 
        }
        );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
        
      return res.status(404).json(
        {
              status: false,
              msg: 'User not found' 
        }
        );
    }

    user.password = await bcrypt.hash(password, 10);

    user.resetCode = undefined;

    user.resetCodeExpiry = undefined;

    await user.save();

    res.status(200).json(
        {
             status: true, 
             msg: 'Password reset successfully'
        }
        );
    // res.status(404).json({ status: false, msg: 'jwt expired' });
  } catch (error) {

    console.error(error);

    res.status(500).json(
        {
             status: false,
             msg: 'Internal Server Error '+ error.message 

            }
        );
  }
};

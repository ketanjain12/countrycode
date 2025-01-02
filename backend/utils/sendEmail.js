const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // Ensure 'service' is correct
    host: 'smtp.gmail.com',  // This is required if using Gmail as the SMTP server
    port: process.env.EMAIL_PORT || 587,  // Use 587 for TLS or 465 for SSL
    secure: false, // Set to 'true' for port 465 or leave 'false' for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

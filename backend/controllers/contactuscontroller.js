const contactus = require('../models/contactusmodel');

exports.contactus = async (req, res) => {
   const { Name, Email, Subject, Message } = req.body;

   // Check if all fields are present
   if (!Name || !Email || !Subject || !Message) {
      return res.status(400).json({
         status: false,
         msg: "Please fill in all fields"
      });
   }

   try {
      const data = new contactus({
         Name,
         Email,
         Subject,
         Message
      });

      // Save the data to the database
      await data.save();

      // Send success response
      return res.status(200).json({
         status: true,
         msg: "Contact us form submitted successfully",
         data: data
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({
         status: false,
         msg: "Server error: " + error.message
      });
   }
};

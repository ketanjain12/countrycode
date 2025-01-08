import React, { useState } from "react";
import axios from "axios";  // Import axios
import "./ContactPage.css"; // Ensure that your CSS file is in the same folder
import { MdDriveFileRenameOutline } from "react-icons/md";

const ContactPage = () => {
   const [formData, setFormData] = useState({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
   });

   const [statusMessage, setStatusMessage] = useState("");  // Add state to show the message

   // Handle input change
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   // Handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post("http://localhost:5000/contact/contactus", formData);

         if (response.status === 200) {
            setStatusMessage("Form submitted successfully!");  // Success message
            setFormData({
              Name: "",
              Email: "",
              Subject: "",
              Message: "",
            });
         } else {
            setStatusMessage(response.data.msg);  // Error message
         }
      } catch (error) {
         setStatusMessage("An error occurred: " + error.message);  // Handle error
         console.error(error);
      }
   };

   return (
      <div className="container">
         <div className="p1">
            <div className="contact-info">
               <h2>Contact Information</h2>
               <div className="info1">
                  <p>We're open for any suggestions and ideas</p>
               </div>
               <div className="info2">
                  <div className="logo1">
                     <ion-icon name="navigate-circle-outline"></ion-icon>
                  </div>
                  <span>153 BhagyaShree Colony Indore M.P. Bharat</span>
               </div>
               <div className="info3">
                  <div className="logo2">
                     <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <span>+91 6260343129</span>
               </div>
               <div className="info4">
                  <div className="logo3">
                     <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <span>jainketan960@example.com</span>
               </div>
               <div className="info5">
                  <div className="logo4">
                     <ion-icon name="earth-outline"></ion-icon>
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                     www.example.com
                  </a>
               </div>
            </div>

            <div className="contact-form">
               <h2>Contact Us</h2>
               <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="input-group">
                     <label htmlFor="name" style={{ color: "aliceblue" }}>
                        Name
                     </label>
                     <div className="input-container">
                        <input
                           type="text"
                           name="Name"
                           className="input"
                           placeholder="Your Name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                        />
                        <MdDriveFileRenameOutline className="input-icon" />
                     </div>
                  </div>

                  {/* Email */}
                  <div className="input-group">
                     <label htmlFor="email" style={{ color: "aliceblue" }}>
                        Email
                     </label>
                     <input
                        type="email"
                        name="Email"
                        className="input"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  {/* Subject */}
                  <div className="input-group">
                     <label htmlFor="subject" style={{ color: "aliceblue" }}>
                        Subject
                     </label>
                     <input
                        type="text"
                        name="Subject"
                        className="input"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  {/* Message */}
                  <div className="input-group">
                     <label htmlFor="message" style={{ color: "aliceblue" }}>
                        Message
                     </label>
                     <textarea
                        name="Message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                     ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="submit-btn">
                     <input type="submit" value="Send" />
                  </div>
               </form>

               {/* Status Message */}
               {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
         </div>
         <div className="credit">
            Made with <span>❤</span> by <a href="" target="_blank">Ketan Jain</a>
         </div>
      </div>
   );
};

export default ContactPage;



//https://github.com/ketanjain12



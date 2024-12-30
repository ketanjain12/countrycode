const express = require("express");
const dbconnect = require("./config/db");
const userRoutes = require("./routes/userroutes"); // Renamed for clarity
const reviewroutes=require("./routes/reviewsroutes")
const profileroutes=require("./routes/profileRoutes")
require("dotenv").config();
// module.exports=router;

const app = express();

// Middleware
app.use(express.json());

// Database Connection
dbconnect();
const cors=require("cors");
app.use(cors());
// Routes
app.use("/api", userRoutes);
app.use("/review",reviewroutes)
app.use("/profile",profileroutes)


// Port Configuration
const PORT = process.env.PORT || 5001;

// Start Server
app.listen(PORT, () => {
  console.log(`App is successfully running on port ${PORT}`);
});

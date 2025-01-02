const express = require("express");
const dbconnect = require("./config/db");
const userRoutes = require("./routes/userroutes"); 
const reviewRoutes = require("./routes/reviewsroutes");
const profileRoutes = require("./routes/profileRoutes");
const forgotPasswordRoutes = require('./routes/forgotPasswordRoutes');

require("dotenv").config();
const app = express();

// Use Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Swagger Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Database Connection
dbconnect();

// API Routes
app.use("/api", userRoutes);
app.use("/review", reviewRoutes);
app.use("/profile", profileRoutes);
app.use("/forgot", forgotPasswordRoutes);

// Port Configuration
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// path for the swagger
// https://github.com/search?q=payment+gatway+nodejs&type=code
// http://localhost:5000/api-docs/
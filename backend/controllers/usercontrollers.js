const express = require("express");
const User = require("../models/usermodels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Fixed typo here

exports.signup = async (req, res) => {
  const { name, email, phoneNo, password } = req.body;

  // Validate input fields
  if (!name || !email || !phoneNo || !password) {
    return res.status(400).json({
      status: false,
      msg: "Please provide all details properly",
    });
  }

  try {
    // Check if the user already exists
    const checkedUser = await User.findOne({ email });

    if (checkedUser) {
      return res.status(400).json({
        status: false,
        msg: "This email is already registered. Please use another email.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      name,
      email,
      phoneNo,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate a JWT token
    // const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
    //   expiresIn: "1h",
    // });

    // Send the response
    return res.status(201).json({
      status: true,
      msg: "User registered successfully",
    //   token,
      email: newUser.email,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      status: false,
      msg: "Something went wrong. Please try again.",
    });
  }
};

exports.signin = async (req, res) => {
//   const { email, mobilenumber, password } = req.body;
const { email,  password } = req.body;

//   if ((!email && !mobilenumber) || !password) {
    if (!email || !password) {

    return res.status(400).json({
      status: false,
      msg: "Please provide either email or mobile number and password.",
    });
  }

  try {
    // Find the user by email or mobile number
    // const checkedUser = await User.findOne({ $or: [{ email }, { mobilenumber }] });
    const checkedUser = await User.findOne({email});
    if (!checkedUser) {
      return res.status(404).json({
        status: false,
        msg: "Invalid credentials. User not found.",
      });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password.trim(), checkedUser.password.trim());

    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        msg: "Invalid credentials. Password is incorrect.",
      });
    }

    // Generate JWT token
    // const token = jwt.sign({ id: checkedUser._id }, process.env.SECRET_KEY, {
    //   expiresIn: "1h",
    // });

    // Send response
    return res.status(200).json({
      status: true,
      msg: "Sign-in successful.",
    //   token,
      user: {
        id: checkedUser._id,
        name: checkedUser.name,
        email: checkedUser.email,
        phoneNo: checkedUser.phoneNo,
      },
    });
  } catch (error) {
    console.error("Sign-in Error:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Something went wrong. Please try again later.",
    });
  }
};

exports.getallusers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({}, { password: 0 }); // Exclude the password field for security

    if (!users.length) {
      return res.status(404).json({
        status: false,
        msg: "No users found.",
      });
    }
    // get the count of users
    const userCount = users.length;

    // Send response with the list of users
    return res.status(200).json({
      status: true,
      msg: "Users retrieved successfully done.",
      userCount,
      users,
      
    });
  } catch (error) {
    console.error("Get All Users Error:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Something went wrong. Please try again later.",
    });
  }
};


const express = require("express");
const Review=require('../models/reviewsmodels')

exports.submitReview=async(req,res)=>{
try {
        const { 
              name,
              city,
              rating, 
              reviewContent, 
              profilePicture 
            } = req.body;

        if(!name || !city || !rating || !reviewContent || !profilePicture){
            return res.status(400).json({
                status:false,
                msg:"please entered all fields"
            })
        }
        // const userId = req.userId; // Extracted from the verified JWT token
        const review = new Review({
            // userId,
            name,
            city,
            rating,
            reviewContent,
            profilePicture
        });
        await review.save();
        res.status(201).json({
            status:true,
            msg:"Review submitted successfully",
            data:review
        })
    } catch (error) {
        // res.status(500).send('Error submitting review');
        return res.status(500).json({
            status:false,
            msg:"Error submitting review",
            error:error.message
        })
    }
};

// module.exports = router;

///submitReview
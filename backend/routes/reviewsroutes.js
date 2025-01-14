const {submitReview}=require("../controllers/reviewscontroller")

const express=require("express")
const router=express.Router();

router.post("/submitReview",submitReview)
module.exports=router;

// new code jan 13
// const { submitReview } = require("../controllers/reviewscontroller");

// const express = require("express");
// const router = express.Router();

// /**
//  * @swagger
//  * /review/submitReview:
//  *   post:
//  *     summary: Submit a Review - Submit a product or service review
//  *     description: This API endpoint allows users to submit a review with rating and comments.
//  *     parameters:
//  *       - in: body
//  *         name: review
//  *         description: User review details
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             productId:
//  *               type: string
//  *             rating:
//  *               type: integer
//  *               minimum: 1
//  *               maximum: 5
//  *             comment:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Review submitted successfully
//  *       400:
//  *         description: Invalid data or rating
//  */
// router.post("/submitReview", submitReview);

// module.exports = router;

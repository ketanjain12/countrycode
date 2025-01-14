const {signup,signin,getallusers}=require("../controllers/usercontrollers")

const express=require("express")
const router=express.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/getallusers',getallusers)


module.exports=router;

// new code jan 13
// const express = require("express");
// const { signup, signin, getallusers } = require("../controllers/usercontrollers");
// const router = express.Router();

// /**
//  * @swagger
//  * /signup:
//  *   post:
//  *     description: User sign-up
//  *     parameters:
//  *       - in: body
//  *         name: user
//  *         description: User signup details
//  *         required: true
//  *         schema:
//  *           type: object
//  *           required:
//  *             - username
//  *             - email
//  *             - password
//  *           properties:
//  *             username:
//  *               type: string
//  *               example: johndoe
//  *             email:
//  *               type: string
//  *               example: johndoe@example.com
//  *             password:
//  *               type: string
//  *               example: securepassword123
//  *     responses:
//  *       200:
//  *         description: User signed up successfully
//  *       400:
//  *         description: Invalid input
//  */
// router.post('/signup', signup);

// /**
//  * @swagger
//  * /signin:
//  *   post:
//  *     description: User sign-in
//  *     parameters:
//  *       - in: body
//  *         name: user
//  *         description: User login details
//  *         required: true
//  *         schema:
//  *           type: object
//  *           required:
//  *             - email
//  *             - password
//  *           properties:
//  *             email:
//  *               type: string
//  *               example: johndoe@example.com
//  *             password:
//  *               type: string
//  *               example: securepassword123
//  *     responses:
//  *       200:
//  *         description: User signed in successfully
//  *       400:
//  *         description: Invalid credentials
//  */
// router.post('/signin', signin);

// /**
//  * @swagger
//  * /getallusers:
//  *   post:
//  *     description: Get all users
//  *     responses:
//  *       200:
//  *         description: A list of users
//  *         schema:
//  *           type: array
//  *           items:
//  *             type: object
//  *             properties:
//  *               id:
//  *                 type: string
//  *                 example: 607d1f77bcf86cd799439011
//  *               username:
//  *                 type: string
//  *                 example: johndoe
//  *               email:
//  *                 type: string
//  *                 example: johndoe@example.com
//  */
// router.post('/getallusers', getallusers);

// module.exports = router;

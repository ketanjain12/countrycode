const express = require('express');
const router=express.Router();
const {contactus}=require('../controllers/contactuscontroller');

router.post('/contactus',contactus)
module.exports = router;

// new code jan 13
// const express = require('express');
// const router = express.Router();
// const { contactus } = require('../controllers/contactuscontroller');

// /**
//  * @swagger
//  * /contactus:
//  *   post:
//  *     summary: Contact Us - Submit a contact request
//  *     description: This API endpoint allows users to submit a contact request with their details.
//  *     parameters:
//  *       - in: body
//  *         name: contactDetails
//  *         description: User contact details to be submitted
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             name:
//  *               type: string
//  *             email:
//  *               type: string
//  *             message:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: Contact request submitted successfully
//  *       400:
//  *         description: Invalid data provided
//  */
// router.post('/contactus', contactus);

// module.exports = router;

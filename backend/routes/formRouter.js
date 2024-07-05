const express = require('express');
const router = express.Router();
const FormSchema = require('../schema/formSchema');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

//Router 1: Add notes notes using: POST 'api/notes/addnotes' login required
router.post('/formdata', [
    body('name', 'enter name').notEmpty(), //use express validator name is not empty
    body('email', 'enter a valid emails').isEmail(),
    body('phone', 'enter a valid phone number').isLength({ min: 10 }).isLength({ max: 10 }),
    body('addline1', 'enter address line 1').notEmpty(),
    body('addline2', 'enter address line 2'),
    body('city', 'enter city').notEmpty(),
    body('state', 'enter state').notEmpty(),
    body('zip', 'enter a valid zip code').isLength({ min: 6 }).isLength({ max: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sanjay892000@gmail.com',
            pass: 'rtydrpwvzcsafryw'
        }
    });
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { name, email, phone, addline1, addline2, city, state, zip } = req.body;
        const form = new FormSchema({ name, email, phone, addline1, addline2, city, state, zip });
        const saveForm = await form.save();
        res.json(saveForm);

        if (saveForm) {
            const mailOptions = {
                from: "mynotebook.gov.in@gmail.com",
                to: email,
                subject: `congratulations! ${name}, thank you for applying`,
                html: `<!DOCTYPE html>
    <html>
    <head>
       <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        .container {
            padding: 20px 0px;
            background-color: #f9f9f9;
            border-radius: 5px;
            width: 100%;
            max-width: 600px;
            margin: auto;
        }

        .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 0px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }

        .content {
            padding: 20px;
            background-color: white;
            border-radius: 0 0 5px 5px;
        }
        .cong{
            color: red;
            font-size: 1em;
        }

        .footer {
            text-align: center;
            padding: 10px 0px;
            font-size: 0.9em;
            color: #888;
        }
    </style>
   </head>

   <body>
    <div class="container">
        <div class="header">
            <h1>Prabhat Center</h1>
        </div>
        <div class="content">
            <p><strong class="cong">Congratulations! </strong>${name},</p>
            <p><strong>Your details is</strong></p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Number: ${phone}</p>
            <p>Add Line 1: ${addline1}</p>
            <p>Add Line 2: ${addline2}</p>
            <p>City: ${city}</p>
            <p>State: ${state}</p>
            <p>Zip Code: ${zip}</p>
            <p>Thank you for applying</p>
            <p>Best regards,</p>
            <p>Prabhat Center</p>
        </div>
        <div class="footer">
            <p>&copy;2024 Prabhat Center. All rights reserved.</p>
        </div>
     </div>
   </body>
   </html>`
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    return res.status(401).send("message not send");
                }
                else {
                    console.log('Message sent: %s', info.response);
                    return res.status(201).send("message send");
                }
            });
            const success = true;
            console.log(success)
        }
        else {
            console.log("massage not send")
        }


    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
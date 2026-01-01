const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require('dotenv').config({ path: 'security.env' });
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a transporter for sending emails via Gmail (or any other service you use)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// POST route to handle the form submission and send the email
app.post("/send", (req, res) => {
    const { name, email, phone, message } = req.body; // Extract data from the request body

    // Set up email options
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Contact Form Submission',
        text: `
                You have received a new message from your contact form:

                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `
    };

    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error:", error);
            return res.status(500).send("Something went wrong. Please try again.");
        }
        console.log("Message sent:", info.response);
        return res.status(200).send("Message sent successfully!");
    });
});

// Start the server and listen on port 5000
app.listen(5000, () => {    
    console.log("Server is running on http://localhost:5000");})